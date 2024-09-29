import pg from 'pg'; 
import { pool_options } from '../../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()

const createServiceCommentsTable = async() => {
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS service_comments(
            comment_id  VARCHAR(36) PRIMARY KEY,
            posted_by VARCHAR(36) ,
            service_id VARCHAR(36) ,
            rating INT,
            comment TEXT,
            FOREIGN KEY (service_id) REFERENCES services(id),
            FOREIGN KEY (posted_by) REFERENCES users(id)
            )`
        );
        console.log("service_comments table created");
    }catch(error) {
        console.error("failed to create service_comments table :",error.message);
        throw new Error(error.message);
    }finally{
        client.release()
      }
};

export default createServiceCommentsTable;