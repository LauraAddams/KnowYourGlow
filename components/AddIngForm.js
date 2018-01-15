/* eslint-disable */
import React from 'react';

import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
} from 'react-native';

import { connect } from 'react-redux';

import PostTagged from '../Actions/PostTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';
import CheckForm from './CheckForm';

import { CONTAINER } from '../config/styles';
import text from '../config/text';

export default class AddIngForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taggedIngredients: this.props.taggedIngredients,
    };
  }


  render() {
  }
}
