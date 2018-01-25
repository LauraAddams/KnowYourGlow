/* eslint-disable */

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

class SearchCompare extends Component {
  state = { term: '', term2: '' };

  render() {
    return (
        <View style={[CONTAINER.form, {flex:0}]}>
        <Text style={text.small}>PRODUCT 1</Text>
          <TextInput
            style={CONTAINER.inputForm}
            onChangeText={term => this.setState({ term })}
            value={this.state.term}
            autoCorrect={false}
            placeholder="ex. Cosrx snail cream"
          />
        <Text style={text.small}>PRODUCT 2</Text>
          <TextInput
            style={CONTAINER.inputForm}
            onChangeText={term2 => this.setState({ term2 })}
            value={this.state.term2}
            autoCorrect={false}
            placeholder="ex. Missha snail essential"
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
