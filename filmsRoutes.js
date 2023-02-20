import express from "express";
import {
  findFilms,
  findFilmsById,
  getFilms,
  addFilm,
  newFilmValidators,
} from "./filmsControllers";

const router = express.Router();

router.get("/", getFilms);
router.get("/search", findFilms);
router.get("/:id", findFilmsById);
router.post("/", newFilmValidators, addFilm);

export default router;
