import { StyleSheet } from 'react-native';
import { FONT_BOLD, FUTURA } from './styles';

const text = StyleSheet.create({
  smallBold: {
    fontSize: 12,
    fontWeight: FONT_BOLD,
    letterSpacing: 4,
    fontFamily: FUTURA,
  },
  medium: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 1,
  },
  p: {
    fontSize: 16,
    fontFamily: FUTURA,
  },
  button: {
    fontSize: 11,
    letterSpacing: 3,
    fontFamily: FUTURA,
    fontWeight: FONT_BOLD,
    textAlign: 'center',
    color: 'white',
  },
});

export default text;
