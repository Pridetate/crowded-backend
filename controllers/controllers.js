import "dotenv/config.js";
import request from "request";
const base_url = "https://rest.bandsintown.com";

export const getArtist = (req, res) => {
  const { name } = req.body;
  request.get(
    {
      url: base_url + `/artists/${name}?app_id=${process.env.APP_ID}`,
      headers: {
        "Content-Type": "application/json",
      },
    },
    function (error, response, body) {
      console.log(body);
      res.send(body);
    }
  );
};
export const getEvents = (req, res) => {
  const { name, date = "all" } = req.body;
  request.get(
    {
      url:
        base_url +
        `/artists/${name}/events?app_id=${process.env.APP_ID}&date=${date}`,
      headers: {
        "Content-Type": "application/json",
      },
    },
    function (error, response, body) {
      console.log(body);
      res.send(body);
    }
  );
};
