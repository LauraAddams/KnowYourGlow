/* eslint-disable */
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import text from '../config/text';
import { CONTAINER } from '../config/styles';

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
      (<View style={styles.container}>
        <View style={[CONTAINER.details, {paddingBottom: 8}]}>
        <Text style={text.smallBold}>{brand}</Text>
        <Icon name="add" size={18} />
        </View>
        <Text style={text.medium} numberOfLines={1}>{name}</Text>
        <View style={[CONTAINER.details, {width: 55, marginTop: 8}]}>
          <Text style={[text.small, {color: '#d4d4d4'}]}>100% </Text>
          <Icon name="sentiment-satisfied" size={18} iconStyle={{color: '#d4d4d4'}}/>
        </View>
      </View>) :
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
    marginTop: 10,
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 20,
  },
});
