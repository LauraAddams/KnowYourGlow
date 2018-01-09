/* eslint-disable */
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <View style={[CONTAINER.search, { marginTop: 30 }]}>
        <TextInput
          style={CONTAINER.input}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
          placeholder="Search"
        />
        <Button
          title={this.props.loading ? '...' : 'GO'}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

export default SearchBar;
