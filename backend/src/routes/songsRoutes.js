import express from "express";
import {
  getSongByTitle,
  getSongById,
  getSongs,
  addSong,
  newSongValidators,
} from "../controllers/songsControllers.js";

const router = express.Router();

router.get("/", getSongs);
router.get("/search", getSongByTitle);
router.get("/:id", getSongById);
router.post("/", newSongValidators, addSong);

export default songRouter;