import pg from 'pg'; 
import { pool_options } from '../../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()

const createServiceImagesTable = async() => {
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS service_images(
            image_id  VARCHAR(36) PRIMARY KEY,
            service_id VARCHAR(36) ,
            path VARCHAR(256) NOT NULL,
            FOREIGN KEY (service_id) REFERENCES services(id)
            )`
        );
        console.log("service_images table created");
    }catch(error) {
        console.error("failed to create service_images table :",error.message);
        throw new Error(error.message);
    }finally{
        client.release()
      }
};

export default createServiceImagesTable;