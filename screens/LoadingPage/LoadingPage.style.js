import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "../../constants/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  text: {
    color: '#fff',
    opacity: 0.4,
    fontSize: 30
  }
})

export default styles;
