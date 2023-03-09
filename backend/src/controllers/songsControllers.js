import { check, validationResult } from "express-validator";
import { Song } from "../models/song.js";

//GET all songs
export const getSongs = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const songs = await Song.find();
  res.status(200).send(songs);
};

//GET with ID
export const getSongById = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(400).send("ID must have 24 characters!");
  }else {
    let song = await Song.findById(req.params.id);
    res.status(200).send(song);
  }
};

//GET with specific title
export const getSongByTitle = async (req, res) => {
  let song = await Song.find({ title: req.query.title });
  res.status(200).send(song);
};

//POST for new song
export const addSong = async (req, res) => {
  //check if data contains all attributes
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  //create new song
  const song = new Song({
    title: req.body.title,
    year: req.body.year,
    available: req.body.available,
    genre: req.body.genre,
    artist: req.body.artist,
  });

  song.save(song).then((todo) => res.status(201).send(todo));
};

//PATCH for song by ID
export const patchSong = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(400).send("ID must have 24 characters!");
  //check if body has no ID else answer with 400
  }else if(req.body._id) {
    res.status(400).send("Cannot change ID!");
  }else {
    let response = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });

    res.status(200).send(response);
  }
};

//DELETE song by ID
export const deleteSong = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  }else {
    let response = await Song.findByIdAndDelete(req.params.id);
    res.status(200).send(response);
  }
};

// attached as second param in a route
export const newSongValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Avaiable field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("artist").notEmpty().withMessage("Artist field required"),
];
