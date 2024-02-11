import axios from "axios";
import { pool } from "../config/db";

const resolvers = {
  launches: async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/launches');
    return response.data;
  },
  launch: async ({ id }: { id: number }) => {
    const response = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
    return response.data;
  },
  favorites: async () => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM favorites');
    client.release();
    return result.rows;
  },

  addFavorite: async ({ id }: { id: number }) => {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO favorites (launch_id) VALUES ($1) RETURNING *",
      [id]
    );
    client.release();
    // const response = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
    return result.rows[0];
  },
};

export default resolvers;