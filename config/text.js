import { StyleSheet } from 'react-native';
import { FONT_BOLD } from './styles';

const text = StyleSheet.create({
  smallBold: {
    fontSize: 12,
    fontWeight: FONT_BOLD,
    letterSpacing: 4,
    fontFamily: 'Helvetica',
  },
  medium: {
    fontSize: 22,
    fontWeight: '200',
    letterSpacing: 1,
  },
});

export default text;
