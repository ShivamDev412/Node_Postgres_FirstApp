import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;
const connection = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  host: "localhost",
  database: "perntodo",
});
export {connection as dbConnection};