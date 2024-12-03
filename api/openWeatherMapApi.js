import * as Location from "expo-location";
import axios from "axios";
import { openWeatherMapApiKey, openWeatherMapApiUrl } from "../constants/general";

const baseApi = axios.create({
  baseURL: openWeatherMapApiUrl,
  params: {
    appid: openWeatherMapApiKey,
    units: "metric"
  }
});

export const getCurrentLocationWeatherApi = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({});
      // API call after getting location
      const URL = `/data/3.0/onecall?lat=${latitude}&lon=${longitude}`;
      const { data } = await baseApi.get(URL);
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
    const URL = `/data/2.5/weather?q=${cityVal}`;
    const { data } = await baseApi.get(URL);
    return data;
  } catch {
    throw new Error("City not found");
  }
}
