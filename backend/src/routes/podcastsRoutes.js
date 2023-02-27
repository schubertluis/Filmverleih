import express from "express";
import {
  getPodcastByTitle,
  getPodcastById,
  getPodcasts,
  addPodcast,
  newPodcastValidators,
} from "../controllers/podcastsController.js";

const router = express.Router();

router.get("/", getPodcasts);
router.get("/search", getPodcastByTitle);
router.get("/:id", getPodcastById);
router.post("/", newPodcastValidators, addPodcast);

export default podcastRouter;
