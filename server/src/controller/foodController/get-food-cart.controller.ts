import { Request, Response } from "express";
import { FoodCartModel } from "../../models/foodCart.schema";

export const getFoodCartController = async (req: Request, res: Response) => {
  try {
    const foodCart = await FoodCartModel.find();
    res
      .status(200)
      .send({ message: "Food cart created successfully", data: foodCart });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
