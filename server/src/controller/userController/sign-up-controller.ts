import { UserModel } from "../../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await UserModel.create({ name, email, password });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `error creating user`, error: error });
  }
};
