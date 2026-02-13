import mongoose, { Model, model, models, Schema } from "mongoose";

enum foodOrderStatus {
  Pending = "Pending",
  Canceled = "Canceled",
  Delivered = "Delivered",
}
type foodOrderItem = {
  food: Schema.Types.ObjectId;
  quantity: string;
};

const FoodOrderItemSchema = new Schema<foodOrderItem>({
  food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  quantity: { type: String, required: true },
});

type foodOrder = {
  user: Schema.Types.ObjectId;
  total_price: number;
  food_Order_Items: string;
  status: string;
};
export const FoodOrderSchema = new Schema<foodOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    total_price: { type: Number },
    food_Order_Items: [{ type: FoodOrderItemSchema, required: true }],
    status: {
      type: String,
      enum: Object.values(foodOrderStatus),
      default: foodOrderStatus.Pending,
    },
  },
  { timestamps: true },
);
export const FoodOrderModel: Model<foodOrder> =
  models["FoodOrder"] || mongoose.model(`FoodOrder`, FoodOrderSchema);
