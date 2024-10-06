import express from "express";
import userRouter from "./users/users.js";
import productRouter from "./products/products.js";
import serviceRouter from "./services/services.js";

export const apiRouter = express.Router();

apiRouter.use("/users",userRouter);
apiRouter.use("/products",productRouter);
apiRouter.use("/services",serviceRouter)