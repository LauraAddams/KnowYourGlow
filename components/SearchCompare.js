/* eslint-disable */

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

class SearchCompare extends Component {
  state = { term: 'Cosrx Snail 96', term2: 'Missha snail essential' };

  render() {
    return (
        <View style={[CONTAINER.form, {flex:0}]}>
          <Text style={[text.smallBold, {marginTop: 30, marginBottom: 30, textAlign: 'center'}]}>COMPARE PRODUCTS</Text>
          <TextInput
            style={CONTAINER.inputForm}
            onChangeText={term => this.setState({ term })}
            value={this.state.term}
            placeholder="ex. Cosrx snail cream"
          />
          <TextInput
            style={CONTAINER.inputForm}
            onChangeText={term2 => this.setState({ term2 })}
            value={this.state.term2}
            placeholder="ex. Cosrx snail cream"
          />
          <Button
            iconRight={{name: 'search', color: 'black', size: 24}}
            onPress={() => this.props.onPressSearch(this.state.term, this.state.term2)}
          />
        </View>
    );
  }
}

export default SearchCompare;
