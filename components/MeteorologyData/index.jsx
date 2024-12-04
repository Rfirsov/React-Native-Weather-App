import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { PRIMARY_LIGHT_COLOR } from "../../constants/colors";
import styles from "./MeteorologyData.style";

const MeteorologyData = ({ humidity, speed, pressure }) => {
  return (
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
  );
};

export default MeteorologyData;
