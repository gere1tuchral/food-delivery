import mongoose, { model, models, Schema, Model } from "mongoose";

type Category = {
  categoryName: string;
};
export const CategorySchema = new Schema<Category>(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export const FoodCategory: Model<Category> =
  models["Category"] || model("Category", CategorySchema);
