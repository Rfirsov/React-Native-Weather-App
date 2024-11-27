import LottieView from "lottie-react-native";
import { View } from "react-native";
import styles from "./LoadingPage.style";

const LoadingPage = () => {
  return (
    <View style={styles.main}>
      <LottieView autoPlay
        loop source={require('../../assets/animations/Loading.json')} 
        style={{ height: 220, width: 220 }}
      />
    </View>
  )
}

export default LoadingPage;