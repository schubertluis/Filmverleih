import express from "express";
import {
  getPodcastByTitle,
  getPodcastById,
  getPodcasts,
  addPodcast,
  newPodcastValidators,
  patchPodcast,
  deletePodcast,
} from "../controllers/podcastsControllers.js";

const podcastRouter = express.Router();

podcastRouter.get("/", getPodcasts);
podcastRouter.get("/search", getPodcastByTitle);
podcastRouter.get("/id/:id", getPodcastById);
podcastRouter.post("/", newPodcastValidators, addPodcast);
podcastRouter.patch("/id/:id", newPodcastValidators, patchPodcast);
podcastRouter.delete("/id/:id", deletePodcast);

export default podcastRouter;
