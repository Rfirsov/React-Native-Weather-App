import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from '../../constants/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR
  },
  animation: {
    height: 250,
    width: 250
  }
});

export default styles;
