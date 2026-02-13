import { configDotenv } from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { categoryRouter, userRouter } from "./router";
import connectTOMondoDB from "./mongodb";
import { foodRouter } from "./router/food.router";
import { foodOrderRouter } from "./router";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/auth", userRouter);
app.use("/foods", foodRouter);
app.use("/categories", categoryRouter);
app.use("/food-order", foodOrderRouter);

connectTOMondoDB();
app.listen(10000, async () => {
  console.log(`Server is running on port ${10000}`);
});
