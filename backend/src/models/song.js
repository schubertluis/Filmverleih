import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  year: Number,
  available: Boolean,
  genre: String,
  artist: String,
});

export const Song = mongoose.model("Song", songSchema);
