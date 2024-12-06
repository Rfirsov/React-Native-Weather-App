import { memo } from "react";
import { Text, View } from "react-native";
import styles from "./WeatherCondition.style";

const WeatherCondition = ({ main }) => {
  return (
    <View>
      <Text style={styles.weatherState}>{main}</Text>
    </View>
  );
};

export default memo(WeatherCondition);
