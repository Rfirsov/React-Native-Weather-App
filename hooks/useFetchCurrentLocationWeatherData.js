import { useState, useEffect } from "react";
import { getCurrentLocationWeatherAsync } from "../api/openWeatherMapApi";

const useFetchCurrentLocationWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getWeatherData = async () => {
      try {
        const data = await getCurrentLocationWeatherAsync(signal);
        setWeatherData(data);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.error('Request canceled', e.message);
        }
      }
    };

    getWeatherData();

    return () => controller.abort();
  }, []);

  return { weatherData };
};

export default useFetchCurrentLocationWeatherData;
