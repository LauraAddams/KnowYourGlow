import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import text from '../config/text';

export default class Landing extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <Text style={text.smallBold}>GOOD MORNING</Text>
        <Text style={text.medium}onPress={this._handlePress}>My Irritants</Text>
        <Text style={text.medium}onPress={this._settingsPress}>Settings</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  _settingsPress = () => {
    this.props.navigation.navigate('Settings');
  }
}
