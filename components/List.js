import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem';

function url(id) {
  return `https://skincare-api.herokuapp.com/products/${id}`;
}

export default class List extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({ item, index }) => (
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
      console.log(response);
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
