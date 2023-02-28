import express from "express";
import {
  getPodcastByTitle,
  getPodcastById,
  getPodcasts,
  addPodcast,
  newPodcastValidators,
} from "../controllers/podcastsControllers.js";

const podcastRouter = express.Router();

podcastRouter.get("/", getPodcasts);
podcastRouter.get("/search", getPodcastByTitle);
podcastRouter.get("/:id", getPodcastById);
podcastRouter.post("/", newPodcastValidators, addPodcast);

export default podcastRouter;
