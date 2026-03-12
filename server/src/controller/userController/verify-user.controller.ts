import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";
import { log } from "console";
interface JwtPayload {
  _id: string;
  iat: number;
  exp: number;
}
export const verifyUser = async (req: Request, res: Response) => {
  try {
    let token = req.query.token;
    console.log(token);
    // const tokenString = Array.isArray(token) ? token[0] : token;
    const decoded = jwt.verify(String(token), "hello") as unknown as JwtPayload;
    console.log(decoded);
    const user = await UserModel.findByIdAndUpdate(
      decoded._id,
      {
        isVerified: true,
      },
      { new: true },
    );
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // if (user.isVerified) {
    //   return res.status(400).send({ message: "User already verified" });
    // }
    // console.log(user);

    res.send({ message: "Email verified successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Invalid or expired token" });
  }
};
