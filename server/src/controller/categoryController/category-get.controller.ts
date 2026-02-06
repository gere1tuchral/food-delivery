import { Request, Response } from "express";

import { FoodCategory } from "../../models/foodCategory";
export const getCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const categoryAPI = await FoodCategory.find({ categoryName });
    res
      .status(200)
      .send({ message: `Category got successfully`, data: categoryAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
