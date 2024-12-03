import LottieView from "lottie-react-native";
import { View } from "react-native";
import styles from "./LoadingPage.style";

const LoadingPage = () => {
  return (
    <View style={styles.main}>
      <LottieView autoPlay
        loop source={require('../../assets/animations/Loading.json')}
        {...styles.animation}
      />
    </View>
  )
}

export default LoadingPage;