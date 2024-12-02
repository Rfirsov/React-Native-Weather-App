import { StyleSheet } from "react-native";
import { PRIMARY_DARK_COLOR, PRIMARY_LIGHT_COLOR_4 } from "../../constants/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_DARK_COLOR,
  },
  text: {
    color: PRIMARY_LIGHT_COLOR_4,
    fontSize: 30
  }
})

export default styles;
