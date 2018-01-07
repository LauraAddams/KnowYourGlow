import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class TaggedIngredients extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Tagged Ingredients</Text>
      </View>
    )
  }

  _handlePress = () => {
  }
}
