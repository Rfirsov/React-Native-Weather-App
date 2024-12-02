import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentLocationWeatherApi, getSearchedCityWeatherApi } from "../api/openWeatherMapApi";

const TemperatureContext = createContext(null);

export const useTemp = () => useContext(TemperatureContext);

const TemperatureContextProvider = ({ children }) => {
  const [tempMode, setTempMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedStateWeatherData, setSelectedStateWeatherData] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCurrentLocationWeatherApi();
        setWeatherData(data);
      } catch (e) {
        setFetchError(true);
      }
    })();
  }, []);

  const getStateWeatherData = async (cityVal) => {
    try {
      const data = await getSearchedCityWeatherApi(cityVal);
      setSelectedStateWeatherData(data);
    } catch (e) {
      setFetchError(true);
    }
  }

  const value = {
    tempMode,
    weatherData,
    getStateWeatherData,
    selectedStateWeatherData,
    fetchError
  };

  return (
    <TemperatureContext.Provider value={value}>
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;