import { memo } from "react";
import { View } from "react-native";
import WeatherIcons from "../../components/WeatherIcons";

import styles from "./WeatherIconView.style";

const WeatherIconView = ({ main, isDayTime }) => {
  const getWeatherIcon = (main) => {
    
    const weatherIconMap = {
      Haze: <WeatherIcons.Haze />,
      Rain: <WeatherIcons.Rain />,
      Snow: <WeatherIcons.Snow />,
      Thunderstorm: <WeatherIcons.Thunderstorm />,
      Drizzle: isDayTime ? <WeatherIcons.Drizzle /> : <WeatherIcons.NightDrizzle />,
      Mist: isDayTime ? <WeatherIcons.Mist /> : <WeatherIcons.NightMist />,
      Clouds: isDayTime ? <WeatherIcons.Cloudy /> : <WeatherIcons.NightCloudy />,
      Clear: isDayTime ? <WeatherIcons.Clear /> : <WeatherIcons.NightClear />,
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
