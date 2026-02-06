import { Request, Response } from "express";
import { FoodCartModel } from "../../models/foodCart.schema";

export const createFoodCartController = async (req: Request, res: Response) => {
  const { foodId, quantity } = req.body;
  const foodCart = await FoodCartModel.create({ foodId, quantity });
  res
    .status(200)
    .send({ message: "Food cart created successfully", data: foodCart });
};
