/* eslint-disable */

import { StyleSheet } from 'react-native';

export const FONT_BOLD = '900';
export const FUTURA = 'Futura-Medium';
export const HELVETICA = 'Helvetica-Light';
export const BG_COLOR = '#F9F9F9';
export const HIGHLIGHT = '#F4CD4E';
export const BLACK = '#283EA7';
export const GRAY = '#DBDBDB';
export const PINK = '#EBC8BC';
export const RED = '#CE2630';
export const YELLOW = '#F4CD4E';
export const TEAL = '#C5D4F0';

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
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    height: 40,
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
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
    paddingBottom: 7,
    paddingTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  form: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taggedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 365,
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
  },
});
