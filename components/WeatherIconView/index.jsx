import { memo } from "react";
import { View } from "react-native";
import WeatherIcons from "../../components/WeatherIcons";
import { currentHour } from "../../utils/dates";

import styles from "./WeatherIconView.style";

const WeatherIconView = ({ main }) => {
  const getWeatherIcon = (main) => {
    const isDaytime = currentHour < 19;
    
    const weatherIconMap = {
      Haze: <WeatherIcons.Haze />,
      Rain: <WeatherIcons.Rain />,
      Snow: <WeatherIcons.Snow />,
      Thunderstorm: <WeatherIcons.Thunderstorm />,
      Drizzle: isDaytime ? <WeatherIcons.Drizzle /> : <WeatherIcons.NightDrizzle />,
      Mist: isDaytime ? <WeatherIcons.Mist /> : <WeatherIcons.NightMist />,
      Clouds: isDaytime ? <WeatherIcons.Cloudy /> : <WeatherIcons.NightCloudy />,
      Clear: isDaytime ? <WeatherIcons.Clear /> : <WeatherIcons.NightClear />,
    };
  
    return weatherIconMap[main] || null;  // Default to null if weather condition is not recognized
  };

  return (
    <View style={[styles.weatherIconView]}>
      {getWeatherIcon(main)}
    </View>
  );
};

export default memo(WeatherIconView);
