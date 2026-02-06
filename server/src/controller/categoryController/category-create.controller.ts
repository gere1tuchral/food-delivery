import { Request, Response } from "express";

import { FoodCategory } from "../../models/foodCategory";
export const createNewCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const categoryAPI = await FoodCategory.create({ categoryName });
    res
      .status(200)
      .send({ message: `Category created successfully`, data: categoryAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
