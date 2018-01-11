import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import text from '../config/text';
import { CONTAINER } from '../config/styles';
import Button from '../components/Button';

export default class CompareProduct extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
        <Text style={text.smallBold}>COMPARE PRODUCTS</Text>
        <View style={CONTAINER.form}>
          <TextInput style={CONTAINER.inputForm} placeholder='Product 1'></TextInput>
          <TextInput style={CONTAINER.inputForm} placeholder='Product 2'></TextInput>
          <Button text={"GO"} onPress={this._handlePress}></Button>
        </View>
      </View>
    )
  }

  _handlePress = () => {
  }
}
