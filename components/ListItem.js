import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import text from '../config/text';

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  render() {
    let { brand, name, ingredient } = this.props.item;

    if (this.props.item.brand) {
      brand = brand.toUpperCase();
      name = name[0].toUpperCase() + name.slice(1);
    } else {
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
    }

    const textResult = brand ?
      (<View style={styles.container}><Text style={text.smallBold}>{brand}</Text>
        <Text style={text.medium} numberOfLines={1}>{name}</Text></View>) :
      <View style={styles.container}><Text style={text.medium}>{ingredient}</Text></View>;

    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#f7f7f7'>
        {textResult}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 25,
  },
});
