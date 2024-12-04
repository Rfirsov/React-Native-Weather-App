import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTemp } from "../../context/TemperatureContext";
import SearchCity from "../../components/SearchCity";
import Temperature from '../../components/Temperature';
import WeatherIconView from "../../components/WeatherIconView";
import LoadingPage from "../LoadingPage";
import WeatherCondition from "../../components/WeatherCondition";
import MeteorologyData from "../../components/MeteorologyData";

import styles from "./SearchPage.style";

const SearchPage = () => {
  const [cityVal, setCityVal] = useState('Dnipro');
  const { getStateWeatherData, selectedStateWeatherData } = useTemp();

  useEffect(() => {
    getStateWeatherData(cityVal);
  },[])

  if (!selectedStateWeatherData) return <LoadingPage />;

  const { main } = selectedStateWeatherData.weather[0];
  const { temp, pressure, humidity } = selectedStateWeatherData.main;
  const { speed } = selectedStateWeatherData.wind;

  return (
    <View style={styles.main}>
      <SearchCity cityVal={cityVal} setCityVal={setCityVal} />
      <WeatherIconView main={main} />
      <Temperature temp={temp} />
      <WeatherCondition main={main} />

      {/* Current location */}
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
