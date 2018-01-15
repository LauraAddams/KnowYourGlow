import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import { PINK } from '../config/styles';

export default class LogIn extends React.Component {
  _handlePress = () => {
  }

  render() {
    return (
      <View style={{ alignItems: 'stretch', justifyContent: 'center', flex: 1, backgroundColor: PINK }}>
        <SocialIcon
          style={{margin: 30}}
          title='Sign In With Facebook'
          button
          type='facebook'
          />
        <Text style={styles.detailText}>Don't have an account yet? Sign Up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailText: {
    textAlign: 'center',
  },
});
