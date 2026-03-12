import { UserModel } from "../../models";
import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { verifyPasswordMail, verifyUserMail } from "../../utils/mail-utils";
export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user) return res.status(404).send({ message: `user not found` });
    const token = jwt.sign({ _id: user.id }, "hello", { expiresIn: "7d" });
    await verifyPasswordMail(
      email,
      `${process.env.BACKEND_API}/auth/verify-password?token=${token}`,
    );
    res.status(200).send({
      message: "batalgaajuulah link email ruu yawuulah token:",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `error creating user`, error: error });
  }
};
