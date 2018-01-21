/* eslint-disable */
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import text from '../config/text';
import { CONTAINER, GRAY } from '../config/styles';

export default class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  _onPressAdd = () => {
    this.props.onPressAdd(this.props.item.brand, this.props.item.name);
  }

  render() {
    let { brand, name, ingredient } = this.props.item;

    if (this.props.item.brand) {
      name = name.toUpperCase();
    } else {
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
    }

    const textResult = brand ?
    (<View style={[styles.container, {borderColor: this.props.borderColor}]}>

      <View style={[CONTAINER.details, {marginBottom: 5}]}>
        <Text style={text.smallBold}>{brand}</Text>
        <Icon name="add" size={16} iconStyle={styles.addIcon} onPress={this._onPressAdd}/>
      </View>

      <Text style={[text.medium, {fontSize: 13}]} >{name}</Text>

    </View>) :
      <View style={styles.container}><Text style={text.medium}>{ingredient}</Text></View>;

    return (
      <View>
        <TouchableHighlight
          onPress={this._onPress}
          underlayColor='#f7f7f7'>
          {textResult}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderLeftWidth: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addIcon: {
    color: GRAY,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: GRAY,
    marginTop: -20,
    marginRight: -12,
  },
});
