import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getWeatherDataById = (id) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&cnt=5&units=metric`
  );

export default {
  getWeatherDataById,
};
