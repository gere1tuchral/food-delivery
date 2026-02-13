import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import { FoodModel } from "../../models";

export const createNewOrder = async (req: Request, res: Response) => {
  try {
    const { user, orderItems } = req.body;

    const allFoods = Promise.all(
      orderItems.map(
        async ({ food, quantity }: { food: string; quantity: string }) => {
          const foundFood = await FoodModel.findById(food);

          return Number(foundFood?.price) * Number(quantity);
        },
      ),
    );

    const result = await allFoods;

    const total = result.reduce((acc, item) => acc + item, 0);

    const foodAPI = await FoodOrderModel.create({
      user,
      total_price: total,
      food_Order_Items: orderItems,
    });

    res
      .status(200)
      .send({ message: `Food order created successfully`, data: foodAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
