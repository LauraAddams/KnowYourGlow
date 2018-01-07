import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class MyRoutine extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>My Routine</Text>
      </View>
    )
  }

  _handlePress = () => {
  }
}
