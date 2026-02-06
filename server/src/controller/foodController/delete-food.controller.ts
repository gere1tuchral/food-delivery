import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const DeletedFoodController = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.body;
    const deletedFood = await FoodModel.findByIdAndDelete(foodId);

    res
      .status(200)
      .send({ message: "Food deleted successfully", data: deletedFood });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
