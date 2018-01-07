import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>To Search!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('SearchProduct');
  }
}
