import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Product extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>To Tagged!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('TaggedIngredients');
  }
}
