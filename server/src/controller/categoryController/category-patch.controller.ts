import { Request, Response } from "express";

import { FoodCategory } from "../../models/foodCategory";
export const updatedCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId, categoryName } = req.body;
    const categoryAPI = await FoodCategory.findByIdAndUpdate(categoryId, {
      categoryName,
    });
    res
      .status(200)
      .send({ message: `Category updated successfully`, data: categoryAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
