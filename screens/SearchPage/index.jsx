import { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTemp } from "../../context/TemperatureContext";
import SearchCity from "../../components/SearchCity";
import LoadingPage from "../LoadingPage";
import { currentHour } from "../../utils/dates";

import styles from "./SearchPage.style";
import { PRIMARY_LIGHT_COLOR } from "../../constants/colors";

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

      {/* Weather icon */}
      <View style={[styles.weatherIconView]}>
        {main === "Haze" ? (
          <Image
            style={{ height: 120, width: 160 }}
            source={require('../../assets/weatherIcons/Haze.png')}
          />
        ) : null}
        {main === "Rain" ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/Rain.png')}
          />
        ) : null}
        {main === "Snow" ? (
          <Image
            style={{ height: 130, width: 160 }}
            source={require('../../assets/weatherIcons/SnowFall.png')}
          />
        ) : null}
        {main === "Thunderstorm" ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/ThunderStorm.png')}
          />
        ) : null}

        {/* Drizzle weather */}
        {main === "Drizzle" && currentHour < 19 ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/Drizzle.png')}
          />
        ) : null}
        {main === "Drizzle" && currentHour >= 19 ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/Night_Drizzle.png')}
          />
        ) : null}

        {/* Mist weather */}
        {main === "Mist" && currentHour < 19 ? (
          <Image
            style={{ height: 130, width: 170 }}
            source={require('../../assets/weatherIcons/Mist.png')}
          />
        ) : null}
        {main === "Mist" && currentHour >= 19 ? (
          <Image
            style={{ height: 150, width: 150 }}
            source={require('../../assets/weatherIcons/Night_Mist.png')}
          />
        ) : null}

        {/* Cloudy weather */}
        {main === "Clouds" && currentHour < 19 ? (
          <Image
            style={{ height: 130, width: 170 }}
            source={require('../../assets/weatherIcons/Cloudy.png')}
          />
        ) : null}
        {main === "Clouds" && currentHour >= 19 ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/Night_Cloudy.png')}
          />
        ) : null}

        {/* Clear weather */}
        {main === "Clear" && currentHour < 19 ? (
          <Image
            style={{ height: 160, width: 160 }}
            source={require('../../assets/weatherIcons/Sunny.png')}
          />
        ) : null}
        {main === "Clear" && currentHour >= 19 ? (
          <Image
            style={{ height: 150, width: 160 }}
            source={require('../../assets/weatherIcons/Night_Clear.png')}
          />
        ) : null}
      </View>

      {/* Temperature */}
      <View>
        <Text style={styles.tempText}>
          {parseInt(temp)}
          <Text style={styles.tempmodeText}>{'\u2103'}</Text>
        </Text>
      </View>

      {/* Weather condition */}
      <View>
        <Text style={styles.weatherState}>{main}</Text>
      </View>

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

      {/* Other weather data */}
      <View style={styles.otherData}>
        <View style={styles.meteorology}>
          <MaterialCommunityIcons
            name='water-outline' 
            size={36}
            color={PRIMARY_LIGHT_COLOR}
          />
          <Text style={styles.otherDataValueText}>
            {humidity} <Text style={styles.unitText}>%</Text>
          </Text>
          <Text style={styles.otherDataText}>Humidity</Text>
        </View>
        <View style={styles.meteorology}>
          <MaterialCommunityIcons
            name='weather-windy'
            size={36}
            color={PRIMARY_LIGHT_COLOR}
          />
          <Text style={styles.otherDataValueText}>
            {speed} <Text style={styles.unitText}>km/h</Text>
          </Text>
          <Text style={styles.otherDataText}>Wind</Text>
        </View>
        <View style={styles.meteorology}>
          <MaterialCommunityIcons
            name='weather-pouring'
            size={36}
            color={PRIMARY_LIGHT_COLOR}
          />
          <Text style={styles.otherDataValueText}>
            {pressure} <Text style={styles.unitText}>hPa</Text>
          </Text>
          <Text style={styles.otherDataText}>pressure</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchPage;
