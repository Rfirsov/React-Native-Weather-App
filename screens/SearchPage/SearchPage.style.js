import { StyleSheet } from "react-native";
import { PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR, PRIMARY_LIGHT_COLOR_2 } from "../../constants/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: PRIMARY_DARK_COLOR,
  },
  date: {
    marginLeft: "7%",
  },
  dateText: {
    color: PRIMARY_LIGHT_COLOR_2,
    fontSize: 12,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  locationText: {
    color: PRIMARY_LIGHT_COLOR,
    fontSize: 30,
    fontWeight: "normal",
    marginLeft: 4,
    textTransform: 'capitalize'
  },
});

export default styles;
