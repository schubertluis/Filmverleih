import { check, validationResult } from "express-validator";
import { Film } from "../models/film.js";

export const getFilms = async (req, res) => {
  const films = await Film.find();
  res.status(200).send(films);
};

export const getFilmById = async (req, res) => {
  let film = await Film.findById(req.params.id);
  res.status(200).send(film);
};

export const getFilmByTitle = async (req, res) => {
  let film = await Film.find({title: req.query.title});
  res.status(200).send(film);
};

export const addFilm = async (req, res) => {
  const error = validationResult(req);
  
  if (!error.isEmpty()) {
    return res.status(400).json({error: error.array()});
  }

  const film = new Film( {
    title: req.body.title,
    year: req.body.year,
    available: req.body.avaiable,
    genre: req.body.genre,
    studio: req.body.studio
  });

  film.save(film).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newFilmValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Available field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("studio").notEmpty().withMessage("Studio field required")
];