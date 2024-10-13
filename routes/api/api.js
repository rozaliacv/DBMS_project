import express from "express";
import userRouter from "./users/users.js";
import productRouter from "./productRoutes/products/products.js";
import serviceRouter from "./serviceRoutes/services/services.js";

export const apiRouter = express.Router();

apiRouter.use("/users",userRouter);
apiRouter.use("/products",productRouter);
apiRouter.use("/services",serviceRouter);