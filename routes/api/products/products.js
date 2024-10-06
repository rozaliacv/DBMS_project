import express from "express";
import {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    replaceProduct,
    deleteProduct,
    getProductbyType,
} from "../../../controllers/products/productController.js";

const productRouter = express.Router();

productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);
productRouter
    .route("/id/:id")
    .get(getProduct)
    .delete(deleteProduct)
    .put(replaceProduct)
    .patch(updateProduct)
    
productRouter
    .route("/name/:name")
    .get(getProduct);
productRouter
    .route("/type/:type_name")
    .get(getProductbyType);


export default productRouter;