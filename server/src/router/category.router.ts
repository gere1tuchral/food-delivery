import { Router } from "express";
import { createNewCategory, getCategory, updatedCategory } from "../controller";

export const categoryRouter = Router();

categoryRouter.post("/category-create", createNewCategory);
categoryRouter.get("/category-get", getCategory);
categoryRouter.patch("./category-update", updatedCategory);
