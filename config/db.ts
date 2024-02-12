import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export async function initializeDatabase() {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS favorites (
        id SERIAL PRIMARY KEY, 
        flight_number INT,
        mission_name TEXT,
        launch_year TEXT,
        rocket_name TEXT,
        rocket_type TEXT,
        site_name TEXT,
        launch_success BOOLEAN,
        details TEXT
      )
    `);
    // console.log("Table created successfully:", result);
    client.release();
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}
