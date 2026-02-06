import { FoodGetById } from "../controller/foodController/get-food-by-id.controller";
import { createNewUser } from "../controller/userController/create-new-user.controller";
import { Router } from "express";
export const userRouter = Router();
userRouter.post("/create-user", createNewUser);

// userRouter.remove("/delete-user", deleteUser);
