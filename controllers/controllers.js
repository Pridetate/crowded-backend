import request from "request";
const base_url = "https://rest.bandsintown.com";
const app_id = 123;

export const getArtist = (req, res) => {
  const { name } = req.body;
  console.log(name);
  request.get(
    {
      url: base_url + `/artists/${name}?app_id=${app_id}`,
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
      url: base_url + `/artists/${name}/events?app_id=${app_id}&date=${date}`,
      headers: {
        "Content-Type": "application/json",
      },
    },
    function (error, response, body) {
      // console.log(error);
      // console.log(response);
      console.log(body);
      res.send(body);
    }
  );
};
