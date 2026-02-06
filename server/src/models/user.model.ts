import mongoose, { models, model, Schema, Model } from "mongoose";

enum userRoles {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: userRoles;
  orderedFoods: string;
  ttl: Date;
  isVerified: boolean;
};
export const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String },
    role: {
      type: String,
      enum: Object.values(userRoles),
      default: userRoles.USER,
    },

    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    ttl: { type: Date },
    isVerified: { type: Boolean },
  },
  {
    timestamps: true,
  },
);
export const UserModel: Model<User> =
  models["Users"] || model("Users", UserSchema);
