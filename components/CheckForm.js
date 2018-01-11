/* eslint-disable */

import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { Button, CheckBox } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

export default class CheckForm extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  render() {
    const { tag } = this.props;
    const { checked } = this.state;

    return (
      <View style={CONTAINER.container}>
        <View style={CONTAINER.form}>
        <CheckBox
          key={tag}
          center
          title='water'
          iconRight
          iconType='material'
          checkedIcon='check-box'
          uncheckedIcon='check-box-outline-blank'
          checkedColor='black'
          checked={checked}
          onPress={() => this.setState({checked: !checked})}
        />
        </View>
      </View>
    );
  }
}
