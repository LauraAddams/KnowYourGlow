/* eslint-disable */

import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { Button, CheckBox } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

export default class RemoveForm extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  render() {
    const { name } = this.props;
    const { checked } = this.state;

    return (
        <CheckBox
          key={name}
          right
          title={name}
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='clear'
          checkedColor='red'
          textStyle={{flex: 1}}
          containerStyle={{borderWidth: 0,width: 300, justifyContent: 'space-between'}}
          checked={checked}
          onPress={() => this.setState({checked: !checked})}
        />
    );
  }
}