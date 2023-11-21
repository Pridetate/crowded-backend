import express from "express";
import { getArtist, getEvents } from "./controllers/controllers.js";
import request from "request";
const base_url = "https://rest.bandsintown.com";
const app_id = 123;

const app = express();
app.use(express.json());
const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  next();
});

app.post("/", getArtist);

app.post("/events", getEvents);
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
