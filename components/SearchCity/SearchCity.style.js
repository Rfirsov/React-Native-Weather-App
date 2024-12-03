import { StyleSheet } from "react-native";
import { PRIMARY_DARK_COLOR_2, PRIMARY_LIGHT_COLOR } from "../../constants/colors";

const styles = StyleSheet.create({
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
});

export default styles;
