import express from "express";
import authRoute from "./Routes/authRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("database error", error);
  });

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("server is running");
});
