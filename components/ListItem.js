import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import text from '../config/text';

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  render() {
    const item = this.props.item;
    const brand = item.brand.toUpperCase();
    const name = item.name[0].toUpperCase() + item.name.slice(1);


    return (
        <TouchableHighlight
        onPress={this._onPress}
        underlayColor='pink'>
            <View style={styles.container}>
              <Text style={text.smallBold}>{brand}</Text>
              <Text style={text.medium} numberOfLines={1}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    borderWidth: 2,
    padding: 10,
  },
});
