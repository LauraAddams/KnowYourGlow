/* eslint-disable */

import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import text from '../config/text';

export default class Product extends React.Component {

  render() {
    const { brand, name, ingredient_list } = this.props.navigation.state.params;

    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={text.smallBold}>{brand.toUpperCase()}</Text>
        <Text style={text.medium}>{name}</Text>
        <Text style={text.p}>{ingredient_list}</Text>
      </View>
    )
  }

  _handlePress = () => {
  }
}
