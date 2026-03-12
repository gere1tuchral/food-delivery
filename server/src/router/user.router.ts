import {
  resetPasswordRequest,
  signInController,
  signUpController,
} from "../controller";

import { Router } from "express";
import { verifyUser } from "../controller/userController/verify-user.controller";
import { verifyPassword } from "../controller/userController/verify-password-request.controller";
import { resetRequest } from "../controller/userController/reset-password.controller";

export const userRouter = Router();

userRouter.post("/sign-up", signUpController);
userRouter.get("/verify-user", verifyUser);
userRouter.post("/sign-in", signInController);
userRouter.post("/reset-password-request", resetPasswordRequest);
userRouter.get("/verify-password", verifyPassword);
userRouter.post("/reset-password", resetRequest);
// userRouter.remove("/delete-user", deleteUser);
