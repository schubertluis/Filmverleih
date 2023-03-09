import { check, validationResult } from "express-validator";
import { Podcast } from "../models/podcast.js";

//GET all podcasts
export const getPodcasts = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const podcasts = await Podcast.find();
  res.status(200).send(podcasts);
};

//GET with ID
export const getPodcastById = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  }else {
    let podcast = await Podcast.findById(req.params.id);
    res.status(200).send(podcast);
  }
};

//GET with specific title
export const getPodcastByTitle = async (req, res) => {
  let podcast = await Podcast.find({ title: req.query.title });
  res.status(200).send(podcast);
};

//POST for new podcast
export const addPodcast = async (req, res) => {
  //check if data contains all attributes
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  //create new podcast
  const podcast = new Podcast({
    title: req.body.title,
    year: req.body.year,
    available: req.body.available,
    broadcaster: req.body.broadcaster,
    topic: req.body.topic,
  });

  podcast.save(podcast).then((todo) => res.status(201).send(todo));
};

//PATCH podcast by ID
export const patchPodcast = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  //check if body has no ID else answer with 400
  }else if(req.body._id) {
    res.status(400).send("Cannot change ID!");
  }else {
    let response = await Podcast.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });

    res.status(200).send(response);
  }
};

//DELETE podcast by ID
export const deletePodcast = async (req, res) => {
  //check if ID has 24 characters
  if (req.params.id.length != 24) {
    res.status(404).send("ID must have 24 characters!");
  }else {
    let response = await Podcast.findByIdAndDelete(req.params.id);
    res.status(200).send(response);
  }
};

// attached as second param in a route
export const newPodcastValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("year").notEmpty().withMessage("Year field required"),
  check("available").notEmpty().withMessage("Available field required"),
  check("broadcaster").notEmpty().withMessage("Broadcaster field required"),
  check("topic").notEmpty().withMessage("Topic field required"),
];
