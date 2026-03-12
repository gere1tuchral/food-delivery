import { UserModel } from "../../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserMail } from "../../utils/mail-utils";
import { log } from "console";
export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).send({ message: "Email already registered" });
    }

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: newUser.id }, "hello", { expiresIn: "7d" });

    await verifyUserMail(
      email,
      `${process.env.BACKEND_API}/auth/verify-user?token=${token}`,
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
