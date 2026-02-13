import { Request, Response } from "express";

import { FoodCategory } from "../../models/foodCategory";
export const deletedCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.body;
    const categoryAPI = await FoodCategory.findByIdAndDelete(categoryId);
    res
      .status(200)
      .send({ message: `Category deleted successfully`, data: categoryAPI });
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
