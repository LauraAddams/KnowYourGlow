import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import text from '../config/text';
import { CONTAINER } from '../config/styles';
import Button from '../components/Button';

export default class SearchProduct extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
          <View style={CONTAINER.search}>
            <TextInput style={CONTAINER.input} clearTextOnFocus={true} placeholder='Search'></TextInput>
            <Button text={"GO"} onPress={this._handlePress}></Button>
          </View>
      </View>
    )
  }

  _handlePress = () => {
  }
}
