import { StyleSheet } from 'react-native';
import { FONT_BOLD, FUTURA, HELVETICA, BLACK } from './styles';

const text = StyleSheet.create({
  smallBold: {
    fontSize: 14,
    fontFamily: 'Georgia-Italic',
    color: BLACK,
  },
  small: {
    fontSize: 11,
    fontWeight: FONT_BOLD,
    fontFamily: FUTURA,
    letterSpacing: 1,
    color: BLACK,
  },
  medium: {
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: FUTURA,
    color: BLACK,
  },
  p: {
    fontSize: 15,
    fontFamily: 'Georgia',
    color: BLACK,
  },
  button: {
    fontSize: 11,
    letterSpacing: 3,
    fontFamily: FUTURA,
    fontWeight: FONT_BOLD,
    textAlign: 'center',
    color: 'white',
  },
  navHeader: {
    fontSize: 12,
    letterSpacing: 5,
    fontFamily: FUTURA,
    color: BLACK,
  },
});

export default text;
