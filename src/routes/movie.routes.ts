import { Router } from "express";

import { MovieController } from "../controllers/movie.controller";

const router = Router();

const movieController = new MovieController();
router.post("/", movieController.createMovie);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovieById);
router.delete("/:id", movieController.deleteMovie);
router.put("/:id", movieController.updateMovie);

export default router;
