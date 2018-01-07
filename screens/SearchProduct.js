import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class SearchProduct extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Search!</Text>
      </View>
    )
  }

  _handlePress = () => {

  }
}
