import {useState, useEffect } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTemp } from "../../context/TemperatureContext";
import LoadingPage from "../LoadingPage";
import { currentHour } from "../../utils/dates";

import styles from "./SearchPage.style";

const SearchPage = () => {
  const [cityVal, setCityVal] = useState('dnipro');

  const { tempMode, StateWeatherData, getStateWeatherData } = useTemp();

  useEffect(() => {
    getStateWeatherData(cityVal);
  },[])
  const submit = () => {
    getStateWeatherData(cityVal);
    setCityVal('');
  }
  const changeFun = (val) => {
    setCityVal(val);
  } 

  if (StateWeatherData) {
    const { main } = StateWeatherData.weather[0];
    const { temp, pressure, humidity } = StateWeatherData.main;
    const { speed } = StateWeatherData.wind;
    
    return (
      <View style={styles.main}>
        <View style={styles.searchCity}>
          <TextInput style={styles.search}
            placeholder="Search Cities"
            placeholderTextColor={"rgba(256,256,256,0.4)"}
            keyboardType='web-search'
            value={cityVal}
            onChangeText={changeFun}
          />
          <TouchableOpacity onPress={submit} style={styles.searchBtn}>
            <MaterialIcons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

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
            <Text style={styles.tempmodeText}>{tempMode ? "°F" : "°C"}</Text>
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
            {StateWeatherData.name}
          </Text>
        </View>

        {/* Other weather data */}
        <View style={styles.otherData}>
          <View style={styles.Humidity}>
            <MaterialCommunityIcons
              name='water-outline' 
              size={36}
              color='rgba(256,256,256,0.9)'
            />
            <Text style={styles.otherDataValueText}>
              {humidity} <Text style={styles.unitText}>%</Text>
            </Text>
            <Text style={styles.otherDataText}>Humidity</Text>
          </View>
          <View style={styles.Pressure}>
            <MaterialCommunityIcons
              name='weather-windy'
              size={36}
              color='rgba(256,256,256,0.9)'
            />
            <Text style={styles.otherDataValueText}>
              {speed} <Text style={styles.unitText}>km/h</Text>
            </Text>
            <Text style={styles.otherDataText}>Wind</Text>
          </View>
          <View style={styles.WindSpeed}>
            <MaterialCommunityIcons
              name='weather-pouring'
              size={36}
              color='rgba(256,256,256,0.9)'
            />
            <Text style={styles.otherDataValueText}>
              {pressure} <Text style={styles.unitText}>hPa</Text>
            </Text>
            <Text style={styles.otherDataText}>pressure</Text>
          </View>
        </View>

      </View>
    );
  } else {
    return <LoadingPage />;
  }
};

export default SearchPage;
