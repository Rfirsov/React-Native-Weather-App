import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoadingPage from "../LoadingPage";
import DailyData from "../../components/DailyData";
import WeatherCondition from "../../components/WeatherCondition";
import MeteorologyData from "../../components/MeteorologyData";
import Temperature from "../../components/Temperature";
import WeatherIconView from "../../components/WeatherIconView";
import { fullDate } from "../../utils/dates";
import { getWeatherForecastData } from "../../utils/weatherForecast";
import useFetchCurrentLocationWeatherData from "../../hooks/useFetchCurrentLocationWeatherData";

import styles from "./HomePage.style";

const HomePage = () => {
  const { weatherData } = useFetchCurrentLocationWeatherData();

  if (!weatherData) return <LoadingPage />;

  const { daysData, tempData } = getWeatherForecastData(weatherData.daily);
  const { temp, humidity, wind_speed: windSpeed, weather, pressure } = weatherData.current;
  const { main } = weather[0];
  
    return (
      <View style={styles.main}>
        <StatusBar style='inverted' />

        {/* Present date */}
        <View style={styles.date}>
          <Text style={styles.dateText}>{fullDate}</Text>
        </View>

        {/* Current location */}
        <View style={styles.location}>
          <Text style={styles.locationText}>Today</Text>
        </View>

        <WeatherIconView main={main} />
        <Temperature temp={temp} />
        <WeatherCondition main={main} />
        <MeteorologyData humidity={humidity} speed={windSpeed} pressure={pressure} />
        
        {/* 7-Day Weather Graph */}
        <View style={styles.DailyData} >
          <DailyData dayData={daysData} tempData={tempData} />
        </View>
      </View>
    );
};

export default HomePage;
