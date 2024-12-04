import { StyleSheet } from "react-native";
import { PRIMARY_LIGHT_COLOR_3 } from "../../constants/colors";

const styles = StyleSheet.create({
  weatherState: {
    color: PRIMARY_LIGHT_COLOR_3,
    fontSize: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
  },
});

export default styles;
