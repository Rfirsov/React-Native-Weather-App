import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_DARK_COLOR_2, PRIMARY_LIGHT_COLOR, PRIMARY_LIGHT_COLOR_3 } from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
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
});

export default styles;
