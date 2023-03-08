import express from "express";
import bodyParser from "body-parser";
import filmRouter from "./routes/filmsRoutes.js";
import songsRouter from "./routes/songsRoutes.js";
import podcastsRouter from "./routes/podcastsRoutes.js";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "../swaggerDocs.js";

//initialize app
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/films", filmRouter);
app.use("/songs", songsRouter);
app.use("/podcasts", podcastsRouter);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

//connecting database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

//run app
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
