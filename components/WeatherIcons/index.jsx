import React from 'react';
import { View, Image } from 'react-native';

const weatherIcons = {
  Haze: require('../../assets/weatherIcons/Haze.png'),
  Rain: require('../../assets/weatherIcons/Rain.png'),
  Snow: require('../../assets/weatherIcons/SnowFall.png'),
  Thunderstorm: require('../../assets/weatherIcons/ThunderStorm.png'),
  Drizzle: require('../../assets/weatherIcons/Drizzle.png'),
  NightDrizzle: require('../../assets/weatherIcons/Night_Drizzle.png'),
  Mist: require('../../assets/weatherIcons/Mist.png'),
  NightMist: require('../../assets/weatherIcons/Night_Mist.png'),
  Cloudy: require('../../assets/weatherIcons/Cloudy.png'),
  NightCloudy: require('../../assets/weatherIcons/Night_Cloudy.png'),
  Clear: require('../../assets/weatherIcons/Sunny.png'),
  NightClear: require('../../assets/weatherIcons/Night_Clear.png')
};

const Icon = ({ condition, style }) => {
  const iconSource = weatherIcons[condition];

  if (!iconSource) return null;

  return <Image style={style} source={iconSource} />;
};

const WeatherIcons = (props) => (
  <View>
    {React.Children.map(props.children, (child) => child)}
  </View>
);

WeatherIcons.Haze = () => <Icon condition="Haze" style={{ height: 120, width: 160 }} />;
WeatherIcons.Rain = () => <Icon condition="Rain" style={{ height: 160, width: 160 }} />;
WeatherIcons.Snow = () => <Icon condition="Snow" style={{ height: 130, width: 160 }} />;
WeatherIcons.Thunderstorm = () => <Icon condition="Thunderstorm" style={{ height: 160, width: 160 }} />;
WeatherIcons.Drizzle = () => <Icon condition="Drizzle" style={{ height: 160, width: 160 }} />;
WeatherIcons.NightDrizzle = () => <Icon condition="NightDrizzle" style={{ height: 160, width: 160 }} />;
WeatherIcons.Mist = () => <Icon condition="Mist" style={{ height: 130, width: 170 }} />;
WeatherIcons.NightMist = () => <Icon condition="NightMist" style={{ height: 150, width: 150 }} />;
WeatherIcons.Cloudy = () => <Icon condition="Cloudy" style={{ height: 130, width: 170 }} />;
WeatherIcons.NightCloudy = () => <Icon condition="NightCloudy" style={{ height: 160, width: 160 }} />;
WeatherIcons.Clear = () => <Icon condition="Clear" style={{ height: 160, width: 160 }} />;
WeatherIcons.NightClear = () => <Icon condition="NightClear" style={{ height: 150, width: 160 }} />;

export default WeatherIcons;
