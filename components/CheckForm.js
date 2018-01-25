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
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }

  _handlePress(name, checked) {
    this.setState({checked: !checked});
    this.props.onPress(name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  render() {
    const { name } = this.props;
    const { checked } = this.state;
    const tagColor = this.props.tagColor;

    return (
        <CheckBox
          key={name}
          right
          title={name}
          iconRight
          iconType='material'
          checkedIcon='check-box'
          uncheckedIcon='check-box-outline-blank'
          checkedColor='black'
          textStyle={[text.smallBold, {flex: 1, fontWeight: '200', fontStyle: 'normal'}]}
          containerStyle={{
            borderWidth: 0,
            width: 300,
            justifyContent: 'space-between',
            backgroundColor: tagColor,
            padding: 5,
            borderRadius: 0,
          }}
          checked={checked}
          onPress={() => this._handlePress(name, checked)}
        />
    );
  }
}
