import { Request, Response } from "express";

import { FoodModel } from "../../models";

export const FoodGetByParams = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    const getFood = await FoodModel.findById(foodId);

    res.status(200).send({ message: "Successfully", data: getFood });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
