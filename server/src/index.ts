import { configDotenv } from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { categoryRouter, userRouter } from "./router";
import connectTOMondoDB from "./mongodb";
import { foodRouter } from "./router/food.router";
import { foodCartRouter } from "./router/foodCart.router";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/foods", foodRouter);
app.use("/categories", categoryRouter);

app.use("/food-cart", foodCartRouter);
connectTOMondoDB();
app.listen(10000, async () => {
  console.log(`Server is running on port ${10000}`);
});
