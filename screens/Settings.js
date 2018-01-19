/* eslint-disable */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { CONTAINER, BG_COLOR } from '../config/styles';
import text from '../config/text';

export default class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      highlight: '#F1BF62',
    };
  }

  _onButtonPress = (value) => {
    this.setState({ highlight: value });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 15, backgroundColor: BG_COLOR}}>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[text.smallBold, {textAlign: 'center'}]}>PICK YOUR HIGHLIGHT</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Text
              style={[styles.select, {backgroundColor: '#F1BF62'}]}
              onPress={() => this._onButtonPress('#F1BF62')}
              />
            <Text
              style={[styles.select, {backgroundColor: '#A9BAB8'}]}
              onPress={() => this._onButtonPress('#A9BAB8')}
              />
            <Text
              style={[styles.select, {backgroundColor: '#486555'}]}
              onPress={() => this._onButtonPress('#486555')}
              />
            <Text
              style={[styles.select, {backgroundColor: '#E89C87'}]}
              onPress={() => this._onButtonPress('#E89C87')}
              />
          </View>
        </View>

        <View style={{flex: 2, paddingLeft: 30, paddingRight: 30, justifyContent: 'center' }}>
          <Text style={styles.block} />
          <Text style={styles.block} />
          <Text style={[styles.highlight, {backgroundColor: this.state.highlight}]} />
          <Text style={styles.block} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  select: {
    width: 40,
    height: 40,
    margin: 10,
  },
  block: {
    marginBottom: 30,
    backgroundColor: 'black',
    height: 20,
    alignSelf: 'stretch',
  },
  highlight: {
    marginBottom: 30,
    height: 20,
    alignSelf: 'stretch',
  },
});
