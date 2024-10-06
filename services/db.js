import pg from 'pg'; 
import { pool_options } from '../config/database.config.js';
const { Pool } = pg; 
const pool = new Pool(pool_options);
const client = await pool.connect()


export async function query(sql, params) {
  const client = await pool.connect()
  try {
    const results = await client.query(sql, params);

    if (results.rows.length > 0) {
      return results.rows;
    } else {
      return [];
    }
  } catch (error) {
    console.error("db.js: Database query error:", error);
    throw new Error("Database query failed: " + error.message);
  }finally{
    client.release()
  }
}