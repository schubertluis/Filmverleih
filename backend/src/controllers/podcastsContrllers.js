import { check, validationResult } from "express-validator";
import { Podcast } from "../models/podcast.js";

export const getPodcasts = async (req, res) => {
  const podcasts = await Podcast.find();
  res.status(200).send(podcasts);
};

export const getPodcastById = async (req, res) => {
  let podcast = await Podcast.findById(req.params.id);
  res.status(200).send(podcast);
};

export const getPodcastmByTitle = async (req, res) => {
  let podcast = await Podcast.find({ title: req.query.title });
  res.status(200).send(podcast);
};

export const addPodcast = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const podcast = new Podcast({
    title: req.body.title,
    year: req.body.year,
    available: req.body.avaiable,
    broadcaster: req.body.broadcaster,
    topic: req.body.topic,
  });

  podcast.save(podcast).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newPodcastValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Available field required"),
  check("broadcaster").notEmpty().withMessage("Broadcaster field required"),
  check("topic").notEmpty().withMessage("Topic field required"),
];
