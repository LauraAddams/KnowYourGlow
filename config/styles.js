/* eslint-disable */

import { StyleSheet } from 'react-native';

export const FONT_BOLD = '900';
export const FUTURA = 'Futura-Medium';
export const HELVETICA = 'Helvetica-Light';
export const PINK = '#FEE6E4';

export const CONTAINER = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: 50,
    borderRadius: 40,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.15,
  },
  input: {
    flexGrow: 1,
    marginLeft: 25,
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  inputForm: {
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    fontWeight: '300',
    padding: 10,
    marginBottom: 20,
  },
  form: {
    flex: 2,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  tagged: {
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
