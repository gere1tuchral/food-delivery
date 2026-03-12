import { UserModel } from "../../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { hash } from "node:crypto";
export const resetRequest = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      {
        new: true,
      },
    );

    console.log(user);

    res.status(200).send({
      message: "success",
      hashedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `error creating user`, error: error });
  }
};
