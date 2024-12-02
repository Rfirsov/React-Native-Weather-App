import * as Location from "expo-location";
import axios from "axios";
import { openWeatherMapApiKey, openWeatherMapApiUrl } from "../constants/general";

export const getCurrentLocationWeatherApi = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      // API call after getting location
      const URL = `${openWeatherMapApiUrl}/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapApiKey}`;
      const { data } = await axios.get(URL);
      return data;
    } else {
      alert("permission is required");
    }
  } catch {
    throw new Error("Location not found");
  }
}

export const getSearchedCityWeatherApi = async (cityVal) => {
  try {
    const URL = `${openWeatherMapApiUrl}/data/2.5/weather?q=${cityVal}&units=metric&appid=${openWeatherMapApiKey}`;
    const { data } = await axios.get(URL);
    return data;
  } catch {
    throw new Error("City not found");
  }
}