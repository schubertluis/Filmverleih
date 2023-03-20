import { check, validationResult } from "express-validator";
import { Film } from "../models/film.js";

//GET all films
export const getFilms = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const films = await Film.find();
  res.status(200).send(films);
};

//GET with ID
export const getFilmById = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  }else {
    let film = await Film.findById(req.params.id);
    res.status(200).send(film);
  }
};

//GET with specific title
export const getFilmByTitle = async (req, res) => {
  let film = await Film.find({ title: req.query.title });
  res.status(200).send(film);
};

//POST for new podcast
export const addFilm = async (req, res) => {
  //check if data contains all attributes
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  //create new podcast
  const film = new Film({
    title: req.body.title,
    year: req.body.year,
    available: req.body.available,
    genre: req.body.genre,
    studio: req.body.studio,
  });

  film.save(film).then((todo) => res.status(201).send(todo));
};

//PATCH film by ID
export const patchFilm = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  //check if body has no ID else answer with 400
  }else if(req.body._id) {
    res.status(400).send("Cannot change ID!");
  }else {
    let response = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });

    res.status(200).send(response);
  }
};

//DELETE film by ID
export const deleteFilm = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  }else {
    let response = await Film.findByIdAndDelete(req.params.id);
    res.status(200).send(response);
  }
};

// attached as second param in a route
export const newFilmValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Available field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("studio").notEmpty().withMessage("Studio field required"),
];
