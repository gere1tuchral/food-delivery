import express, { Router } from "express";
import { createFoodCartController } from "../controller/foodController/createFoodCart";
import { getFoodCartController } from "../controller/foodController/get-food-cart.controller";

export const foodCartRouter = express.Router();

foodCartRouter.post("/add-to-cart", createFoodCartController);
foodCartRouter.get("/get-cart", getFoodCartController);
