import {query} from "../../services/db.js";

const getAll = async () => {
    return await query("SELECT * FROM users");
};

const get = async(id) => {
    const res = await query("SELECT * FROM users WHERE uid = ?",[id]);
    if(res.length < 1)
    {
        throw{status:404 , message: "User not found"};
    }
    return res[0];
}

const add = async(userDetails) => {
    const {uid , name , gender , email , address , phone , photo} = userDetails;
    const res = await query(
        `INSERT INTO users (id, name , gender , email , address , phone , photo)
        VALUES (?,?,?,?,?,?,?)`,
        [uid , name , gender , email , address , phone , photo]
    );
    return res;
};

const update = async(id,userDetails) => {
    const {uid , name , gender , email , address , phone , photo} = userDetails;
    const res = await query(
        `UPDATE  users 
        SET name = ?, gender =? , email =? , address = ?, phone = ? , photo = ?
        WHERE uid = ?`,
        [  userDetails.name , userDetails.gender , userDetails.email , userDetails.address , userDetails.phone , userDetails.photo , id]
    );
    return res;
};

const remove = async(id) => {
    const res = await query(`DELETE FROM users WHERE uid = ?`,[id]);
    if(res.rowCount == 0) {
        throw{ status:404,message:"user not found"};
    }
}
export default { getAll,get,add,update,remove};