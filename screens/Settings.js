import React from 'react';
import { Text, View } from 'react-native';

import { CONTAINER } from '../config/styles';
import text from '../config/text';

export default class Settings extends React.Component {

  render() {
    return (
      <View style={CONTAINER.container}>
        <Text style={text.medium}>Settings</Text>
      </View>
    );
  }
}
