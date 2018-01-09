/* eslint-disable */

import { StyleSheet } from 'react-native';

export const FONT_BOLD = '900';
export const FUTURA = 'Futura-Medium';
export const PINK = '#FEE6E4';

export const CONTAINER = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    flexGrow: 1,
    margin: 10,
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  form: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  }
});
