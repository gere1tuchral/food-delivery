import mongoose from "mongoose";

const connectTOMondoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
    console.log("connected to mongodb");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
export default connectTOMondoDB;
