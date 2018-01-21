/* eslint-disable */

import { StyleSheet } from 'react-native';

export const FONT_BOLD = '900';
export const FUTURA = 'Futura-Medium';
export const HELVETICA = 'Helvetica-Light';
export const BG_COLOR = '#FCFCFC';
export const HIGHLIGHT = '#F1BF62';
export const BLACK = '#0F0F0F';
export const GRAY = '#DBDBDB';

export const CONTAINER = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: BG_COLOR,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: 40,
    borderBottomColor: GRAY,
    borderBottomWidth: 1,
  },
  input: {
    flexGrow: 1,
    marginLeft: 25,
    fontSize: 16,
    fontWeight: '500',
  },
  inputForm: {
    backgroundColor: 'white',
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
  taggedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 380,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landing: {
    position: 'absolute',
    top: 50,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
