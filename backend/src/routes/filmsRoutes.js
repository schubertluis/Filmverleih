import express from "express";
import {
  getFilmByTitle,
  getFilmById,
  getFilms,
  addFilm,
  newFilmValidators,
  deleteFilm,
  patchFilm,
} from "../controllers/filmsControllers.js";

const filmRouter = express.Router();

filmRouter.get("/", getFilms);
filmRouter.get("/search", getFilmByTitle);
filmRouter.get("/:id", getFilmById);
filmRouter.post("/", newFilmValidators, addFilm);
filmRouter.patch("/:id", newFilmValidators, patchFilm);
filmRouter.delete("/:id", deleteFilm);

export default filmRouter;