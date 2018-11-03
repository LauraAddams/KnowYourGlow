import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { CONTAINER, BLACK } from '../config/styles';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <View style={[CONTAINER.search]}>
        <TextInput
          style={CONTAINER.input}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
          autoCorrect={false}
          placeholder="Search"
        />
        <Button
          iconRight={{ name: 'search', color: BLACK, size: 24 }}
          backgroundColor="rgba(0,0,0,0)"
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

export default SearchBar;
