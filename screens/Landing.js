import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Landing extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <Text>Good Morning</Text>
        <Text onPress={this._handlePress}>My Irritants</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }
}
