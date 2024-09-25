import pg from 'pg'; 
import { pool_options } from '../config/database.config.js';

const { Pool } = pg; 

const pool = new Pool(pool_options);


export async function query(sql, params) {
  try {
    const [results] = await pool.query(sql, params);

    if (results.length > 0) {
      return results;
    } else {
      return [];
    }
  } catch (error) {
    console.error("db.js: Database query error:", error);
    throw new Error("Database query failed: " + error.message);
  }
}