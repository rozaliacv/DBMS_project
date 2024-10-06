import pg from 'pg'; 
import { pool_options } from '../../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()

const createUsersTable = async() => {
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS users(
            id  UUID PRIMARY KEY,
            name VARCHAR(52) NOT NULL,
            gender VARCHAR(10) ,
            email VARCHAR(52) NOT NULL,
            address VARCHAR(52) NOT NULL,
            phone   VARCHAR(10) ,
            photo VARCHAR(52) 
            )`
        );
        console.log("users table created");
    }catch(error) {
        console.error("failed to create users table :",error.message);
        throw new Error(error.message);
    }finally{
        client.release()
      }
};

export default createUsersTable;