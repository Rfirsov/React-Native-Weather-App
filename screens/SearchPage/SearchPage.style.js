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
  searchCity: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: "15%",
    marginHorizontal: "4%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  search:{
    backgroundColor: PRIMARY_DARK_COLOR_2,
    padding: 10,
    flex: 1,
    borderRadius: 30,
    color: PRIMARY_LIGHT_COLOR,
    paddingLeft: 25
  },
  searchBtn: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_DARK_COLOR_2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft: 10
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
    justifyContent:'center',
    marginTop:30,
    marginBottom:50
  },
  locationText: {
    color: PRIMARY_LIGHT_COLOR,
    fontSize: 30,
    fontWeight: "normal",
    marginLeft: 4,
    textTransform:'capitalize'
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
    flex: 1,
    flexDirection: "row",
    width: width - 30,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 30,
    marginBottom:40
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
