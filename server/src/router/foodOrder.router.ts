import express, { Router } from "express";
import {
  createNewOrder,
  orderGetById,
  updatedFoodOrder,
} from "../controller/foodOrderController";
import { orderGetByUserId } from "../controller/foodOrderController/get-food-order-by-user-id.controller";

export const foodOrderRouter = Router();

foodOrderRouter.post("/order-create", createNewOrder);
foodOrderRouter.get("/order-get", orderGetById);
foodOrderRouter.get("/order-get-id/:userId", orderGetByUserId);
foodOrderRouter.patch("/order-update", updatedFoodOrder);
