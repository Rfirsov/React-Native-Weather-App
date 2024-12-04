import { Children, cloneElement } from "react";
import { View, Image } from "react-native";

const WeatherIcons = (props) => {
  return (
    <View>
      {Children.map(props.children, (child) => cloneElement(child))}
    </View>
  );
}

const Haze = () => (
  <Image
    style={{ height: 120, width: 160 }}
    source={require('../../assets/weatherIcons/Haze.png')}
  />
);

const Rain = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/Rain.png')}
  />
);

const Snow = () => (
  <Image
    style={{ height: 130, width: 160 }}
    source={require('../../assets/weatherIcons/SnowFall.png')}
  />
);

const Thunderstorm = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/ThunderStorm.png')}
  />
);

const Drizzle = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/Drizzle.png')}
  />
);

const NightDrizzle = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/Night_Drizzle.png')}
  />
);

const Mist = () => (
  <Image
    style={{ height: 130, width: 170 }}
    source={require('../../assets/weatherIcons/Mist.png')}
  />
);

const NightMist = () => (
  <Image
    style={{ height: 150, width: 150 }}
    source={require('../../assets/weatherIcons/Night_Mist.png')}
  />
);

const Cloudy = () => (
  <Image
    style={{ height: 130, width: 170 }}
    source={require('../../assets/weatherIcons/Cloudy.png')}
  />
);

const NightCloudy = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/Night_Cloudy.png')}
  />
);

const Sunny = () => (
  <Image
    style={{ height: 160, width: 160 }}
    source={require('../../assets/weatherIcons/Sunny.png')}
  />
);

const NightClear = () => (
  <Image
    style={{ height: 150, width: 160 }}
    source={require('../../assets/weatherIcons/Night_Clear.png')}
  />
);

WeatherIcons.Haze = Haze;
WeatherIcons.Rain = Rain;
WeatherIcons.Snow = Snow;
WeatherIcons.Thunderstorm = Thunderstorm;
WeatherIcons.Drizzle = Drizzle;
WeatherIcons.NightDrizzle = NightDrizzle;
WeatherIcons.Mist = Mist;
WeatherIcons.NightMist = NightMist;
WeatherIcons.Cloudy = Cloudy;
WeatherIcons.NightCloudy = NightCloudy;
WeatherIcons.Sunny = Sunny;
WeatherIcons.NightClear = NightClear;

export default WeatherIcons;
