/* eslint-disable */
import React from 'react';
import { View, Text } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER, BLACK } from '../config/styles';

export default class RemoveForm extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  render() {
    const { index, name } = this.props;
    const { checked } = this.state;

    return (
        <CheckBox
          key={name}
          title={name}
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='clear'
          checkedColor='red'
          size={1}
          textStyle={{fontSize: 12, color: 'white'}}
          containerStyle={{
            borderWidth: 0,
            backgroundColor: BLACK,
            padding: 3,
            borderRadius: 12,
          }}
          checked={checked}
          onPress={() => this.props._handlePress(index)}
        />
    );
  }
}
