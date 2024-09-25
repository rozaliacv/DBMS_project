import express from "express";
import userRouter from "./users/users.js";

export const apiRouter = express.Router();

apiRouter.use("/users",userRouter);