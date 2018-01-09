/* eslint-disable */

import React from 'react';

import {
  Text,
  View,
  TextInput,
} from 'react-native';

import text from '../config/text';
import { CONTAINER } from '../config/styles';
import Button from '../components/Button';

export default class AddProduct extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
        <Text style={text.smallBold}>ADD PRODUCT</Text>
        <View style={CONTAINER.form}>
          <TextInput style={CONTAINER.input} placeholder='Brand'></TextInput>
          <TextInput style={CONTAINER.input} placeholder='Name'></TextInput>
          <TextInput style={CONTAINER.input} placeholder='Ingredients'></TextInput>
          <Button text={"GO"} onPress={this._handlePress}></Button>
        </View>
      </View>
    )
  }

  _handlePress = () => {

  }
}
