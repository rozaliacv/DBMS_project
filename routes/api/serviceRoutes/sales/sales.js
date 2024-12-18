import express from "express";
import {
    getAllSales,
    getSale,
    addSale
} from "../../../../controllers/service_sales/service_salesController.js";


const saleRouter = express.Router();

saleRouter
    .route("/")
    .get(getAllSales)
    .post(addSale);
saleRouter    
    .route("/sale_id/:sale_id")
    .get(getSale)   
saleRouter    
    .route("/sold_by/:sold_by")
    .get(getSale);
saleRouter
    .route("/sold_to/:sold_to")
    .get(getSale);
saleRouter
    .route("/service_id/:service_id")
    .get(getSale);

export default saleRouter;