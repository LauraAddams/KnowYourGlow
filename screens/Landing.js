import React from 'react';
import { Icon } from 'react-native-elements';

import {
  Text,
  View,
} from 'react-native';

import text from '../config/text';

export default class Landing extends React.Component {
  static navigationOptions=({ navigation }) => ({
    headerRight: <Icon name="settings" size={24} color='#c5c5c5' containerStyle={{paddingRight: 10}} onPress={()=> navigation.navigate('Settings')} />
  });

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Icon name="wb-sunny" size={30} />
        <Text style={[text.smallBold, { padding: 15 }]}>Good Morning</Text>
        <Text style={text.p}onPress={this._handlePress}>My Tagged Ingredients</Text>
      </View>
    )
  }
}
