import users from "../../models/users/users.js";

export const getAllUsers = async(req,res,next) => {
    try {
        const userList = await users.getAll();
        res.json(userList);
    }catch(error) {
        next(error);
    }
};

export const getUser = async(req,res,next) => {
    try{
        const user = await users.get(req.params.uid);
        res.json(user);
    } catch(error) {
        next(error);
    }
};

export const addNewUser = async(req,res,next) => {
    try {
        const newUser =  req.body ;
        await users.add(newUser);
        const addedUser = await users.get(newUser.uid);
        res
            .status(201)
            .json({message: "user created", addedUser});
    }catch(error) {
        next(error);
    }
};

export const updateUser = async (req,res,next) => {
    try {
        await users.update(req.params.uid , req.body);
        const updatedUser = await users.get(req.params.uid);
        res.json({message: "user updated", updatedUser});
    } catch(error) {
        next(error);
    }
};

export const deleteUser = async(res,req,next) => {
    try{
        await users.remove(req.params.uid);
        res.status(204).end();
    } catch(error) {
        next(error);
    }
};