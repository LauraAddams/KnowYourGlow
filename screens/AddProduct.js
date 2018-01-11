/* eslint-disable */

import React from 'react';

import {
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

import { Button } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

export default class AddProduct extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
        <Image source={require('../assets/sample.jpg')} style={{ flex:2, resizeMode: 'contain', margin: 30 }}/>
        <Text style={[text.smallBold, { marginBottom: 30 }]}>ADD PRODUCT</Text>
        <View style={CONTAINER.form}>
          <TextInput style={CONTAINER.inputForm} placeholder='BRAND'></TextInput>
          <TextInput style={CONTAINER.inputForm} placeholder='NAME'></TextInput>
          <TextInput style={CONTAINER.inputForm} placeholder='INGREDIENTS'></TextInput>
          <Button
            iconRight={{name: 'add-circle', color: 'black', size: 40}}
            backgroundColor='rgba(0,0,0,0)'
            onPress={this._handlePress}
          />
        </View>
      </View>
    )
  }

  _handlePress = () => {

  }
}
