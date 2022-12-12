import Movie from "../models/Movie";
import { AppDataSource } from "../db";

export const movieRepository = AppDataSource.getRepository(Movie);
