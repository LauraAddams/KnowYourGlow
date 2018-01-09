import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';

import text from '../config/text';

const width = Dimensions.get('window').width;

class ListItem extends React.PureComponent {

  render() {
    const item = this.props.item;
    const brand = item.brand.toUpperCase();
    const name = item.name[0].toUpperCase() + item.name.slice(1);


    return (
          <View style={styles.container}>
              <Text style={text.smallBold}>{brand}</Text>
              <Text style={text.medium}
                numberOfLines={1}>{name}</Text>
          </View>
    );
  }
}

export default class ListView extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.products}
        keyExtractor={this._keyExtractor}
        renderItem={this._render}
      />
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
