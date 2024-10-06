import express from "express";
import {
    getAllServices,
    getService,
    addService,
    updateService,
    replaceService,
    deleteService,
    getServicebyType,
} from "../../../controllers/services/serviceController.js";

const serviceRouter = express.Router();

serviceRouter
    .route("/")
    .get(getAllServices)
    .post(addService);
serviceRouter
    .route("/:id")
    .get(getService)
    .delete(deleteService)
    .put(replaceService)
    .patch(updateService)
    
serviceRouter
    .route("/:name")
    .get(getService);
serviceRouter
    .route("/:type")
    .get(getServicebyType);

export default serviceRouter;