import { UserModel } from "../../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user) return res.status(404).send({ message: `user not found` });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).send({ message: `invalid password` });
    res.status(200).send({ message: `user signed successfully`, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `error sign in`, error: error });
  }
};
