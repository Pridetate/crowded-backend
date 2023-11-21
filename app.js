import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { getArtist, getEvents } from "./controllers/controllers.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("API working!");
});
app.post("/", getArtist);

app.post("/events", getEvents);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
