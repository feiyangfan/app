const express = require("express");
const axios = require("axios").default;
const router = express.Router();
require("dotenv").config({ path: "./config/config.env" });
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

router.post("/", (req, res) => {
  const city = req.body.city;
  console.log(`weather query ${city}`);

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`
    )
    .then((resp) => {
      res.send(resp.data);
    });
});

module.exports = router;
