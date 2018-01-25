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
  },
});
