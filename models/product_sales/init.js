import pg from 'pg'; 
import { pool_options } from '../../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()

const createProductSalesTable = async() => {
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS product_sales(
            sale_id  VARCHAR(36) PRIMARY KEY,
            sold_by VARCHAR(36),
            sold_to VARCHAR(36),
            product_id VARCHAR(36),
            price FLOAT NOT NULL DEFAULT 0,
            sale_date DATE NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products(id),
            FOREIGN KEY (sold_by) REFERENCES users(id),
            FOREIGN KEY (sold_to) REFERENCES users(id) 
            )`
        );
        console.log("product_sales table created");
    }catch(error) {
        console.error("failed to create product_sales table :",error.message);
        throw new Error(error.message);
    }finally{
        client.release()
      }
};

export default createProductSalesTable;