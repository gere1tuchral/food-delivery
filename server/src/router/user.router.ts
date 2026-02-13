import { signInController, signUpController } from "../controller";

import { Router } from "express";

export const userRouter = Router();

userRouter.post("/sign-up", signUpController);
userRouter.post("/sign-in", signInController);
// userRouter.remove("/delete-user", deleteUser);
