import React from 'react';

import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

import text from '../config/text';

const Button = (props) => (
  <TouchableHighlight style={styles.container}>
    <Text style={text.button}>{props.text}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 8,
    paddingLeft: 17,
    paddingRight: 17,
    margin: 10,
    borderRadius: 15,
  },
});

export default Button;
