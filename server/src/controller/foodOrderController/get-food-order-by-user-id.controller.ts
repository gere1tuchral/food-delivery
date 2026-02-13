import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const orderGetByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const getOrder = await FoodOrderModel.find({
      user: userId as Object,
    });
    res.status(200).send({ message: "Successfully", data: getOrder });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
