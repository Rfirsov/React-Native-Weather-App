import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import styles from './ErrorPage.style';

const ErrorPage = () => {
  return (
    <View style={styles.main}>
      <LottieView
        autoPlay
        loop
        source={require('../../assets/animations/ErrorAnimation.json')} 
        {...styles.animation}
      />
    </View>
  )
}

export default ErrorPage;
