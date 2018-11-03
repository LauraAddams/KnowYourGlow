import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER, BLACK } from '../config/styles';

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
          style={[CONTAINER.inputForm, {marginBottom: 30}]}
          onChangeText={term2 => this.setState({ term2 })}
          value={this.state.term2}
          autoCorrect={false}
          placeholder="ex. Missha snail essential"
        />
        <Button
          containerViewStyle={{ position: 'absolute', bottom: 0, left: -15, right: -15 }}
          buttonStyle={{ padding: 7 }}
          textStyle={{ fontWeight: '600' }}
          title="COMPARE"
          backgroundColor={BLACK}
          onPress={() => this.props.onPressSearch(this.state.term, this.state.term2)}
        />
      </View>
    );
  }
}

export default SearchCompare;
