import express from "express";
import {
  getSongByTitle,
  getSongById,
  getSongs,
  addSong,
  newSongValidators,
} from "../controllers/songsControllers.js";

const songRouter = express.Router();

songRouter.get("/", getSongs);
songRouter.get("/search", getSongByTitle);
songRouter.get("/:id", getSongById);
songRouter.post("/", newSongValidators, addSong);

export default songRouter;