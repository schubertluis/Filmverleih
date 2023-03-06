import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
  title: String,
  year: Number,
  available: String,
  broadcaster: String,
  topic: String,
});

export const Podcast = mongoose.model("podcasts", podcastSchema);
