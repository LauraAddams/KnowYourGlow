import React from 'react';
import { Text, View } from 'react-native';

import text from '../config/text';

export default class Settings extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <Text style={text.medium}>Settings</Text>
      </View>
    );
  }
}
