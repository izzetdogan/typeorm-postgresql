import { DataSource } from "typeorm";
import Movie from "./models/Movie";
import dotenv from "dotenv";

dotenv.config();

const DB_HOST = <string>process.env.POSTGRES_HOST;
const DB_USER = <string>process.env.POSTGRES_USER;
const DB_PASSWORD = <string>process.env.POSTGRES_PASSWORD;
const DB_NAME = <string>process.env.POSTGRES_DB;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Movie],
  subscribers: [],
  migrations: [],
});
