import { useState, useEffect } from 'react';
import { getSearchedCityWeatherAsync } from "../api/openWeatherMapApi";
import useStateCity from './useStateCity';

const useFetchSelectedLocationWeatherData = () => {
  const { city } = useStateCity();
  const [selectedStateWeatherData, setSelectedStateWeatherData] = useState(null);

  const getStateWeatherData = async (cityVal, signal) => {
    try {
      const data = await getSearchedCityWeatherAsync(cityVal, signal);
      setSelectedStateWeatherData(data);
    } catch (e) {
      if (axios.isCancel(e)) {
        console.error('Request canceled', e.message);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    getStateWeatherData(city, signal);

    return () => controller.abort();
  }, []);

  return { selectedStateWeatherData, getStateWeatherData };
};

export default useFetchSelectedLocationWeatherData;
