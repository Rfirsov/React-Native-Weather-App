import { StyleSheet, Dimensions } from "react-native";
import {
  PRIMARY_DARK_COLOR,
  PRIMARY_DARK_COLOR_2,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_LIGHT_COLOR_2,
  PRIMARY_LIGHT_COLOR_3,
  PRIMARY_LIGHT_COLOR_4
} from "../../constants/colors";

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
  weatherIconView: {
    display: "flex",
    alignItems: "center",
    marginVertical: 30,
  },
  tempText: {
    color: PRIMARY_LIGHT_COLOR,
    fontSize: 60,
    alignSelf: "center",
  },
  tempmodeText: {
    color: PRIMARY_LIGHT_COLOR_4,
  },
  weatherState: {
    color: PRIMARY_LIGHT_COLOR_3,
    fontSize: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
  },
  otherData: {
    flex: 0.8,
    flexDirection: "row",
    width: width - 30,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 30,
  },
  meteorology: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: PRIMARY_DARK_COLOR_2,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  otherDataValueText: {
    fontSize: 14,
    color: PRIMARY_LIGHT_COLOR,
  },
  otherDataText: {
    fontSize: 14,
    color: PRIMARY_LIGHT_COLOR_3,
    marginTop: 10,
    textTransform: "capitalize",
  },
  unitText: {
    fontSize: 11,
    color: PRIMARY_LIGHT_COLOR_3,
  },
  DailyData: {
    flex: 1,
    width: width - 30,
    alignSelf: "center",
    borderRadius: 30,
  },
});

export default styles;
