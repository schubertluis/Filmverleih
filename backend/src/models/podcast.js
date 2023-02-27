import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema( {
    title: String,
    year: Number,
    Available: boolean,
    broadcaster: String,
    topic: String
});

export const Film = mongoose.model("Films", filmSchema);