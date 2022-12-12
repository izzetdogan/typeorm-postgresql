import { IMovie } from "../interface/movie.interface";
import Movie from "../models/Movie";
import { movieRepository } from "../repository/movie.repository";
import { ApiError, NotFoundError } from "../utils/general-error";

export const getAllMovies = async () => {
  return await movieRepository.find();
};

export const getMovieById = async (id: number): Promise<Movie> => {
  const find = await movieRepository.findOneBy({ id: id });
  if (!find) {
    throw new NotFoundError("id not found");
  }
  return find;
};

export const createMovie = async (movie: IMovie) => {
  const createOne = await movieRepository.save(movie);
  return createOne;
};

export const updateMovie = async (movie: IMovie, id: number) => {
  const findOne = await getMovieById(id);
  findOne.title = movie.title;
  findOne.desc = movie.desc;
  findOne.year = movie.year;
  const updateOne = await movieRepository.save(findOne);
  return updateOne;
};

export const deleteMovie = async (id: number) => {
  const movie = await getMovieById(id);
  return await movieRepository.remove(movie);
};
