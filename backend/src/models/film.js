import mongoose from "mongoose";

const filmSchema = new mongoose.Schema( {
    title: String,
    year: Number,
    available: boolean,
    genre: String,
    studio: String
});

export const Film = mongoose.model("Films", filmSchema);