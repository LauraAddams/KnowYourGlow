/* eslint-disable */

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Text,
} from 'react-native';

import text from '../config/text';

function url(id) {
  return 'https://skincare-api.herokuapp.com/products/' + id;
}

class ListItem extends React.PureComponent {
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

export default class ListView extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (id) => {
    this._query(url(id));
  };

  _query = (query) => {
    fetch(query)
    .then(response => response.json())
    .then(json => this._response(json))
    .catch(error =>
      this.setState({
        message: 'Something bad happened ' + error
      }));
    };

  _response = (response) => {
    if (response) {
      this.props.navigation.navigate({
        component: Product,
        passProps: {products: response}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
  };

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
