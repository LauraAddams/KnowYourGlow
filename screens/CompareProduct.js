/* eslint-disable */
import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';
import CheckForm from '../components/CheckForm';

export default class CompareProduct extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
        <Text style={[text.smallBold, {marginTop: 30, marginBottom: 30}]}>COMPARE PRODUCTS</Text>
        <View style={CONTAINER.form}>
          <TextInput style={CONTAINER.inputForm} placeholder='Product 1'></TextInput>
          <TextInput style={CONTAINER.inputForm} placeholder='Product 2'></TextInput>
            <Button
              iconRight={{name: 'add-circle', color: 'black', size: 20}}
              backgroundColor='rgba(0,0,0,0)'
              onPress={this._handlePress}
            />
            <Button
              backgroundColor='black'
              title='COMPARE'
              onPress={this._handlePress}
            />
          <CheckForm />
        </View>
      </View>
    )
  }

  _handlePress = () => {
  }
}
