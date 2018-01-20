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
      brand = brand[0].toUpperCase() + brand.slice(1);
      name = name.toUpperCase();
    } else {
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
    }

    const textResult = brand ?
    (<View style={styles.container}>

      <View style={CONTAINER.details}>
        <Text style={text.smallBold}>{brand}</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[text.small, {color: GRAY}]}>100% </Text>
          <Icon name="sentiment-satisfied" size={18} iconStyle={{color: GRAY}}/>
        </View>
      </View>

      <Text style={[text.medium, {fontSize: 14, marginTop: 5}]} numberOfLines={1}>{name}</Text>

      <View style={{position: 'absolute', left: -15, top: 25}}>
        <Icon name="add" size={20} iconStyle={{color: 'black'}} onPress={this._onPressAdd} />
      </View>

    </View>) :
      <View style={styles.container}><Text style={text.medium}>{ingredient}</Text></View>;

    return (
      <View>
        <TouchableHighlight
          onPress={this._onPress}
          underlayColor='#f7f7f7'>
          {textResult}
        </TouchableHighlight>
        <Icon type="material-community" name="stairs" size={10} iconStyle={{margin: 5, color: 'rgba(0,0,0,0.5)'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    marginLeft: 25,
  },
});
