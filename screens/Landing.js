import React from 'react';
import { Icon } from 'react-native-elements';

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
        <Icon name="wb-sunny" size={30}/>
        <Text style={[text.smallBold, {padding: 15}]}>Good Morning</Text>
        <Text style={text.p}onPress={this._handlePress}>My Tagged Ingredients</Text>
        <Text style={text.p}onPress={this._settingsPress}>My Settings</Text>
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
