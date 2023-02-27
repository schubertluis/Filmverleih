import { check, validationResult } from "express-validator";
import { Song } from "../models/song.js";

export const getSongs = async (req, res) => {
  const songs = await Song.find();
  res.status(200).send(songs);
};

export const getSongById = async (req, res) => {
  let song = await Song.findById(req.params.id);
  res.status(200).send(song);
};

export const getSongByTitle = async (req, res) => {
  let song = await Song.find({title: req.query.title});
  res.status(200).send(song);
};

export const addSong = async (req, res) => {
  const error = validationResult(req);
  
  if (!error.isEmpty()) {
    return res.status(400).json({error: error.array()});
  }

  const song = new Song( {
    title: req.body.title,
    year: req.body.year,
    available: req.body.avaiable,
    genre: req.body.genre,
    artist: req.body.artist
  });

  song.save(song).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newSongValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Available field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("artist").notEmpty().withMessage("Artist field required")
];