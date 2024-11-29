import * as Location from "expo-location";
import axios from "axios";
import { openWeatherMapApiKey, openWeatherMapApiUrl } from "../constants/general";


export const getCurrentLocationWeatherData = async () => {
  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;
  // API call after getting location
  const URL = `${openWeatherMapApiUrl}/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapApiKey}`;
  const { data } = await axios.get(URL);
  console.log('first,', data);
  return data;
}

export const getSearchedCityWeatherData = async (cityVal) => {
  const URL = `${openWeatherMapApiUrl}/data/2.5/weather?q=${cityVal}&units=metric&appid=${openWeatherMapApiKey}`;
  const { data } = await axios.get(URL);
  return data;
}