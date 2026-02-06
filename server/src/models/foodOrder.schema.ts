import mongoose, { model, Schema } from "mongoose";

enum foodOrderStatus {
  Pending = "Pending",
  Canceled = "Canceled",
  Delivered = "Delivered",
}
type foodOrderItem = {
  food: Schema.Types.ObjectId;
  quantity: Number;
};

const FoodOrderItemSchema = new Schema<foodOrderItem>({
  food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  quantity: { type: Number, required: true },
});

type foodOrder = {
  user: String;
  total_price: Number;
  food_Order_Items: String;
  status: String;
};
export const FoodOrderSchema = new Schema<foodOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    total_price: { type: Number },
    food_Order_Items: [{ FoodOrderItemSchema }],
    status: {
      type: String,
      enum: Object.values(foodOrderStatus),
      default: foodOrderStatus.Pending,
    },
  },
  { timestamps: true },
);

