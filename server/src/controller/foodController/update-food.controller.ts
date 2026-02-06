import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const UpdatedFoodController = async (req: Request, res: Response) => {
  try {
    const { foodId, foodName, price } = req.body;
    const updatedFood = await FoodModel.findByIdAndUpdate(foodId, {
      foodName,
      price,
    });

    res
      .status(200)
      .send({ message: "Food updated successfully", data: updatedFood });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
