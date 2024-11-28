import { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { openWeatherMapApiKey, openWeatherMapApiUrl } from "../constants/general";

const TemperatureContext = createContext(null);

export const useTemp = () => useContext(TemperatureContext);

const TemperatureContextProvider = ({ children }) => {
  const [tempMode, setTempMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [StateWeatherData, setStateWeatherData] = useState(null);
  const [FetchError, setFetchError] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("permission is required");
      } else {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        // API call after getting location
        const URL = `${openWeatherMapApiUrl}/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapApiKey}`;
        try {
          const { data } = await axios.get(URL);
          setWeatherData(data);
        } catch (e) {
          setFetchError(true);
        }
      }
    })();
  }, []);

  const getStateWeatherData = async(cityVal) => {
    try {
      const URL = `${openWeatherMapApiUrl}/data/2.5/weather?q=${cityVal}&units=metric&appid=${openWeatherMapApiKey}`;
      const { data } = await axios.get(URL);
      setStateWeatherData(data);
    } catch (e) {
      setFetchError(true);
    }
  }

  const value = {
    tempMode,
    weatherData,
    getStateWeatherData,
    StateWeatherData,
    FetchError
  };

  return (
    <TemperatureContext.Provider value={value}>
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;