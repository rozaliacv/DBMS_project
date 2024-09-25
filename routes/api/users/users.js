import express from "express";

import {
    getUser,
    getAllUsers,
    addNewUser,
    updateUser,
    deleteUser
} from "../../../contollers/users/userController.js";

import {v4 as uuid } from "uuid";
import {userValidator} from "../../../middleware/users/userValidator.js";
export const userRouter = express.Router();
userRouter
    .route('/')
    .get(getAllUsers)
    .post(userValidator , async(req,res,next) => {
        req.body.uid = uuid();
        addNewUser(req,res,next);
    });
userRouter
    .route('/:uid')
    .get(getUser)
    .patch(userValidator,updateUser)
    .put(userValidator,updateUser)
    .delete(deleteUser);

export default userRouter;