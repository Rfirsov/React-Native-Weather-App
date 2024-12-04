import { Text, View } from "react-native";
import styles from "./Temperature.style";

const Temperature = ({ temp }) => {
  return (
    <View>
      <Text style={styles.tempText}>
        {parseInt(temp)}
        <Text style={styles.tempmodeText}>{'\u2103'}</Text>
      </Text>
    </View>
  );
};

export default Temperature;
