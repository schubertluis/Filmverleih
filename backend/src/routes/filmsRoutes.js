import express from "express";
import {
  getFilmByTitle,
  getFilmById,
  getFilms,
  addFilm,
  newFilmValidators,
} from "../controllers/filmsControllers.js";

const router = express.Router();

router.get("/", getFilms);
router.get("/search", getFilmByTitle);
router.get("/:id", getFilmById);
router.post("/", newFilmValidators, addFilm);

export default filmRouter;