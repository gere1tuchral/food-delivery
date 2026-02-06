import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const userAPI = await UserModel.create({
      name,
      email,
      password,
      phoneNumber,
    });
    res.status(200).send(userAPI);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
