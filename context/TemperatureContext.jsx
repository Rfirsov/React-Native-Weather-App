import { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { getCurrentLocationWeatherData, getSearchedCityWeatherData } from "../api/openWeatherMapApi";

const TemperatureContext = createContext(null);

export const useTemp = () => useContext(TemperatureContext);

const TemperatureContextProvider = ({ children }) => {
  const [tempMode, setTempMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [stateWeatherData, setStateWeatherData] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("permission is required");
      } else {
        try {
          const data = await getCurrentLocationWeatherData();
          setWeatherData(data);
        } catch (e) {
          setFetchError(true);
        }
      }
    })();
  }, []);

  const getStateWeatherData = async (cityVal) => {
    try {
      const data = await getSearchedCityWeatherData(cityVal);
      setStateWeatherData(data);
    } catch (e) {
      setFetchError(true);
    }
  }

  const value = {
    tempMode,
    weatherData,
    getStateWeatherData,
    stateWeatherData,
    fetchError
  };

  return (
    <TemperatureContext.Provider value={value}>
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;