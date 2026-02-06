import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const createNewFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, category } = req.body;
    const foodAPI = await FoodModel.create({
      foodName,
      price,
      category,
    });
    res
      .status(200)
      .send({ message: `Food created successfully`, data: foodAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
