import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import text from '../config/text';
import { HIGHLIGHT } from '../config/styles';

export default class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={HIGHLIGHT}
        style={{ padding: 15, marginBottom: 10, backgroundColor: '#F8F8F8', borderRadius: 20 }}
        {...this.props.sortHandlers}
      >
        <Text style={[text.p, {fontSize: 13, fontWeight: '400'}]}>{this.props.data}</Text>
      </TouchableHighlight>
    );
  }
}
