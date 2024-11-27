import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import styles from './ErrorPage.style';

const ErrorPage = () => {
  return (
    <View style={styles.main}>
      <LottieView autoPlay
        loop source={require('../../assets/animations/ErrorAnimation.json')} 
        style={{ height: 250, width: 250 }}
      />
    </View>
  )
}

export default ErrorPage;
