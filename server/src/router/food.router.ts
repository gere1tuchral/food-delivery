import {
  DeletedFoodController,
  FoodGetById,
  UpdatedFoodController,
} from "../controller";
import { createNewFood } from "../controller/foodController/create-new-food.controller";
import { Router } from "express";
import { FoodGetByParams } from "../controller/foodController/get-food-by-id-params.controller";
export const foodRouter = Router();
foodRouter.post("/food-create", createNewFood);
foodRouter.get("/food-by-id", FoodGetById);
foodRouter.get("/food-by-id/:foodId", FoodGetByParams);
foodRouter.patch("/food-updated", UpdatedFoodController);
foodRouter.delete("/food-deleted", DeletedFoodController);
