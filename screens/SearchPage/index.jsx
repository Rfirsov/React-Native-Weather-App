import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchCity from "../../components/SearchCity";
import Temperature from '../../components/Temperature';
import WeatherIconView from "../../components/WeatherIconView";
import LoadingPage from "../LoadingPage";
import WeatherCondition from "../../components/WeatherCondition";
import MeteorologyData from "../../components/MeteorologyData";
import useFetchSelectedLocationWeatherData from "../../hooks/useFetchSelectedLocationWeatherData";

import styles from "./SearchPage.style";

const SearchPage = () => {
  const { selectedStateWeatherData, getStateWeatherData } = useFetchSelectedLocationWeatherData();

  if (!selectedStateWeatherData) return <LoadingPage />;

  const { dt: dayTime, sys: { sunrise, sunset } } = selectedStateWeatherData;
  const { main } = selectedStateWeatherData.weather[0];
  const { temp, pressure, humidity } = selectedStateWeatherData.main;
  const { speed } = selectedStateWeatherData.wind;

  const isDayTime = dayTime >= sunrise && dayTime <= sunset;

  return (
    <View style={styles.main}>
      <SearchCity getStateWeatherData={getStateWeatherData} />
      <WeatherIconView main={main} isDayTime={isDayTime} />
      <Temperature temp={temp} />
      <WeatherCondition main={main} />

      <View style={styles.location}>
        <Ionicons
            name="location-outline"
            size={36}
            color='#3ddc84'
          />
        <Text style={styles.locationText}>
          {selectedStateWeatherData.name}
        </Text>
      </View>

      <MeteorologyData humidity={humidity} speed={speed} pressure={pressure} />
    </View>
  );
};

export default SearchPage;
