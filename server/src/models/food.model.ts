import mongoose, { model, models, Schema, Model } from "mongoose";

type FoodType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
};
export const FoodSchema = new Schema<FoodType>(
  {
    foodName: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    image: { type: String },
    ingredients: { type: String },
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  },
);
export const FoodModel: Model<FoodType> =
  models["Foods"] || model("Foods", FoodSchema);
