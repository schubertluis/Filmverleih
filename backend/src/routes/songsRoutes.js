import express from "express";
import {
  getSongByTitle,
  getSongById,
  getSongs,
  addSong,
  newSongValidators,
  deleteSong,
  patchSong,
} from "../controllers/songsControllers.js";

const songRouter = express.Router();

songRouter.get("/", getSongs);
songRouter.get("/search", getSongByTitle);
songRouter.get("/:id", getSongById);
songRouter.post("/", newSongValidators, addSong);
songRouter.patch("/:id", newSongValidators, patchSong);
songRouter.delete("/:id", deleteSong);

export default songRouter;