import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class CompareProduct extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Compare Products</Text>
      </View>
    )
  }

  _handlePress = () => {
  }
}
