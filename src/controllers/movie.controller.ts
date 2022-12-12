import { NextFunction, Request, Response } from "express";
import * as movieService from "../services/movie.service";

export class MovieController {
  public async getMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const findAll = await movieService.getAllMovies();
      res.status(200).json({ findAll });
    } catch (error) {
      next(error);
    }
  }

  public async getMovieById(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    try {
      const find = await movieService.getMovieById(id);
      return res.status(200).send(find);
    } catch (error) {
      next(error);
    }
  }

  public async createMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await movieService.createMovie(req.body);
      res.status(201).json({ movie });
    } catch (error) {
      next(error);
    }
  }

  public async updateMovie(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    try {
      const update = await movieService.updateMovie(req.body, id);
      res.status(200).json({ update });
    } catch (error) {
      next(error);
    }
  }

  public async deleteMovie(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    try {
      const movie = await movieService.deleteMovie(id);
      return res.status(200).json({ movie: movie, success: true });
    } catch (error) {
      next(error);
    }
  }
}
