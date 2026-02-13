import { UserModel } from "../../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { log } from "node:console";
import { checkPrime } from "node:crypto";
export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.findOne({ email });
    if (user?.email === email)
      return res.status(404).send({ message: `email already registered` });
    const userdata = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    res
      .status(200)
      .send({ message: `user created successfully`, data: userdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `error creating user`, error: error });
  }
};
