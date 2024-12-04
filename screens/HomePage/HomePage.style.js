import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR, PRIMARY_LIGHT_COLOR_2 } from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: PRIMARY_DARK_COLOR,
  },
  date: {
    marginTop: "15%",
    marginLeft: "7%",
  },
  dateText: {
    color: PRIMARY_LIGHT_COLOR_2,
    fontSize: 12,
  },
  location: {
    marginTop: 3,
    marginLeft: "6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: PRIMARY_LIGHT_COLOR,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 4,
  },
  DailyData: {
    flex: 1,
    width: width - 30,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default styles;
