import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";
import { FoodModel } from "../../models";

export const updatedFoodOrder = async (req: Request, res: Response) => {
  try {
    const { orderId, orderItems } = req.body;
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

    const updatedorder = await FoodOrderModel.findByIdAndUpdate(orderId, {
      food_Order_Items: orderItems,
      total_price: total,
    });

    res
      .status(200)
      .send({ message: "Food order updated successfully", data: updatedorder });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
