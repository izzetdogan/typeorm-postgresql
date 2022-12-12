import express from "express";
import cors from "cors";
import movieRouter from "./routes/movie.routes";
import dotenv from "dotenv";
import { errorMiddleware } from "./utils/middleware-error";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", movieRouter);

app.use(errorMiddleware);

export default app;
