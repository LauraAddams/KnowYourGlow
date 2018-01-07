import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  SearchBar
} from 'react-native-elements';

export default class TaggedIngredients extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
        <SearchBar
          round
          lightTheme
          onChangeText={() => {}}
          placeholder='Search Ingredients'
          />
      </View>
    )
  }

}
