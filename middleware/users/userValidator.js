export const userValidator = (req,res,next) => {
    const {uid , name , email , address} = req.body;

    if(!uid || !name || !email || !address) {
        return res.status(400).json({
            message:"validation error:Missing required fields",
            required_fields:["uid" , "name" , "email" , "address"],
        });
    }
    next();
}
