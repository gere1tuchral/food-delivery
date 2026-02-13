import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const orderGetById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;
    const getOrder = await FoodOrderModel.findById(orderId);

    res.status(200).send({ message: "Successfully", data: getOrder });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Error", data: error });
  }
};
