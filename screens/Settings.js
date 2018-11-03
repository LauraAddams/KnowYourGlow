import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { BG_COLOR, BLACK, PINK, RED, YELLOW, TEAL } from '../config/styles';
import text from '../config/text';

const styles = StyleSheet.create({
  select: {
    width: 40,
    height: 40,
    margin: 10,
  },
  block: {
    marginBottom: 30,
    backgroundColor: BLACK,
    height: 20,
    alignSelf: 'stretch',
  },
  highlight: {
    marginBottom: 30,
    height: 20,
    alignSelf: 'stretch',
  },
});

export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: YELLOW,
    };
  }

  _onButtonPress = (value) => {
    this.setState({ highlight: value });
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          padding: 15,
          backgroundColor: BG_COLOR,
        }}
      >

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={[text.smallBold, { textAlign: 'center' }]}>PICK YOUR HIGHLIGHT</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Text
              style={[styles.select, { backgroundColor: PINK }]}
              onPress={() => this._onButtonPress(PINK)}
            />
            <Text
              style={[styles.select, { backgroundColor: RED }]}
              onPress={() => this._onButtonPress(RED)}
            />
            <Text
              style={[styles.select, { backgroundColor: YELLOW }]}
              onPress={() => this._onButtonPress(YELLOW)}
            />
            <Text
              style={[styles.select, { backgroundColor: TEAL }]}
              onPress={() => this._onButtonPress(TEAL)}
            />
          </View>
        </View>

        <View style={{
            flex: 2,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.block} />
          <Text style={styles.block} />
          <Text style={[styles.highlight, { backgroundColor: this.state.highlight }]} />
          <Text style={styles.block} />
        </View>
      </View>
    );
  }
}
