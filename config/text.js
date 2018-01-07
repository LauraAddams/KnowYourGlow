import { StyleSheet } from 'react-native';
import { FONT_BOLD } from './styles';

const text = StyleSheet.create({
  smallBold: {
    fontSize: 12,
    fontWeight: FONT_BOLD,
    letterSpacing: 5,
    fontFamily: 'Helvetica',
  },
  medium: {
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 2,
  },
});

export default text;
