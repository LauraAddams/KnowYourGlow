/* eslint-disable */
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

class SearchBar extends Component {
  state = { term: 'Gold' };

  render() {
    return (
      <View style={[CONTAINER.search]}>
        <TextInput
          style={CONTAINER.input}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
          placeholder="ex. Cosrx snail cream"
        />
        <Button
          iconRight={{name: 'search', color: 'black', size: 24}}
          backgroundColor='rgba(0,0,0,0)'
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

export default SearchBar;
