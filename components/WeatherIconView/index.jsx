import { View } from "react-native";
import WeatherIcons from "../../components/WeatherIcons";
import { currentHour } from "../../utils/dates";

import styles from "./WeatherIconView.style";

const WeatherIconView = ({ main }) => {
  return (
    <View style={[styles.weatherIconView]}>
      {main === "Haze" && <WeatherIcons.Haze />}
      {main === "Rain" && <WeatherIcons.Rain />}
      {main === "Snow" && <WeatherIcons.Snow />}
      {main === "Thunderstorm" && <WeatherIcons.Thunderstorm />}

      {main === "Drizzle" && (currentHour < 19 ? <WeatherIcons.Drizzle /> : <WeatherIcons.NightDrizzle />)} 

      {main === "Mist" && (currentHour < 19 ? <WeatherIcons.Mist /> : <WeatherIcons.NightMist />)}

      {main === "Clouds" && (currentHour < 19 ? <WeatherIcons.Cloudy /> : <WeatherIcons.NightCloudy />)}

      {main === "Clear" && (currentHour < 19 ? <WeatherIcons.Sunny /> : <WeatherIcons.NightClear />)}
    </View>
  );
};

export default WeatherIconView;
