import axios from "axios";
import { pool } from "../config/db";

const url = 'https://api.spacexdata.com/v3/launches/';

const resolvers = {
  launches: async () => {
    const response = await axios.get(url);
    return response.data;
  },
  launch: async ({ id }: { id: number }) => {
    const response = await axios.get(url + id);
    return response.data;
  },
  favorites: async () => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM favorites');
    client.release();
    const favorites = result.rows.map((row) => {
      const { rocket_name, rocket_type, site_name, ...rest } = row;
      return {
        ...rest,
        rocket: {
          rocket_name,
          rocket_type,
        },
        launch_site: {
          site_name,
        },
      };
    });
    return favorites;
  },

  addFavorite: async ({ id }: { id: number }) => {
    const client = await pool.connect();
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches/${id}`
    );
    const launch = response.data;
    const {
      flight_number,
      mission_name,
      launch_year,
      rocket: { rocket_name, rocket_type },
      launch_site: { site_name },
      launch_success,
      details,
    } = launch;

    const result = await client.query(
      `INSERT INTO favorites (
        flight_number,
        mission_name,
        launch_year,
        rocket_name,
        rocket_type,
        site_name,
        launch_success,
        details
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [
        flight_number,
        mission_name,
        launch_year,
        rocket_name,
        rocket_type,
        site_name,
        launch_success,
        details,
      ]
    );

    client.release();
    const {
      rocket_name: name,
      rocket_type: type,
      site_name: site,
      ...rest
    } = result.rows[0];
    return {
      ...rest,
      rocket: {
        rocket_name: name,
        rocket_type: type,
      },
      launch_site: {
        site_name: site,
      },
    };
  },
  removeFavorite: async ({ id }: { id: number }) => {
    const client = await pool.connect();
    const result = await client.query(
      `DELETE FROM favorites WHERE flight_number = $1 RETURNING flight_number`,
      [id]
    );
    client.release();
    return result.rows[0].flight_number;
  },
};

export default resolvers;