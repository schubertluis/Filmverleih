import express from "express";
import {
  getFilmByTitle,
  getFilmById,
  getFilms,
  addFilm,
  newFilmValidators,
} from "../controllers/filmsControllers.js";

const filmRouter = express.Router();

filmRouter.get("/", getFilms);
filmRouter.get("/search", getFilmByTitle);
filmRouter.get("/:id", getFilmById);
filmRouter.post("/", newFilmValidators, addFilm);

export default filmRouter;