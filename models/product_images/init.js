import pg from 'pg'; 
import { pool_options } from '../../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()

const createProductImagesTable = async() => {
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS product_images(
            image_id  VARCHAR(36) PRIMARY KEY,
            product_id VARCHAR(36) ,
            path VARCHAR(256) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products(id)
            )`
        );
        console.log("product_images table created");
    }catch(error) {
        console.error("failed to create product_images table :",error.message);
        throw new Error(error.message);
    }finally{
        client.release()
      }
};

export default createProductImagesTable;