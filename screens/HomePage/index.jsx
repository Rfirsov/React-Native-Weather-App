import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTemp } from "../../context/TemperatureContext";
import LoadingPage from "../LoadingPage";
import DailyData from "../../components/DailyData";

import styles from "./HomePage.style";

const HomePage = () => {
  const date = new Date();
  const Full_Date = date.toDateString();

  const { tempMode, weatherData } = useTemp();

  if (weatherData) {
    const { temp, humidity, wind_speed, weather, pressure, dt } = weatherData.current;
    const { daily } = weatherData;
    const date = new Date();
    const hour = date.getHours();
    const { main } = weather[0];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysData = [];
    const tempData = [];

    {
      daily.map((e, index) => {
        if (index >= 1) {
          const dd = new Date(e.dt * 1000).getUTCDay();
          daysData.push(days[dd]);
          tempData.push(e.temp["day"]);
        }
      });
    }

    return (
      <View style={styles.main}>
        <StatusBar style='inverted' />

        {/* Present date */}
        <View style={styles.date}>
          <Text style={styles.dateText}>{Full_Date}</Text>
        </View>

        {/* Current location */}
        <View style={styles.location}>
          <Text style={styles.locationText}>Today</Text>
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
          {main === "Drizzle" && hour < 19 ? (
            <Image
              style={{ height: 160, width: 160 }}
              source={require('../../assets/weatherIcons/Drizzle.png')}
            />
          ) : null}
          {main === "Drizzle" && hour >= 19 ? (
            <Image
              style={{ height: 160, width: 160 }}
              source={require('../../assets/weatherIcons/Night_Drizzle.png')}
            />
          ) : null}

          {/* Mist weather */}
          {main === "Mist" && hour < 19 ? (
            <Image
              style={{ height: 130, width: 170 }}
              source={require('../../assets/weatherIcons/Mist.png')}
            />
          ) : null}
          {main === "Mist" && hour >= 19 ? (
            <Image
              style={{ height: 150, width: 150 }}
              source={require('../../assets/weatherIcons/Night_Mist.png')}
            />
          ) : null}

          {/* Cloudy weather */}
          {main === "Clouds" && hour < 19 ? (
            <Image
              style={{ height: 130, width: 170 }}
              source={require('../../assets/weatherIcons/Cloudy.png')}
            />
          ) : null}
          {main === "Clouds" && hour >= 19 ? (
            <Image
              style={{ height: 160, width: 160 }}
              source={require('../../assets/weatherIcons/Night_Cloudy.png')}
            />
          ) : null}

          {/* Clear weather */}
          {main === "Clear" && hour < 19 ? (
            <Image
              style={{ height: 160, width: 160 }}
              source={require('../../assets/weatherIcons/Sunny.png')}
            />
          ) : null}
          {main === "Clear" && hour >= 19 ? (
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
              {wind_speed} <Text style={styles.unitText}>km/h</Text>
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
        
        {/* 7-Day Weather Graph */}
        <View style={styles.DailyData} >
          <DailyData dayData={daysData} tempData={tempData} />
        </View>
      </View>
    );
  } else {
    return <LoadingPage />;
  }
};

export default HomePage;
