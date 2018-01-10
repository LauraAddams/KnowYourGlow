import React, { Component } from 'react';

import {
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

import List from '../components/List';
import { CONTAINER } from '../config/styles';
import SearchBar from '../components/SearchBar';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

export default class SearchProduct extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
    };
  }

  onPressSearch = (term) => {
    const query = url(term);
    this._query(query);
  };

  _query = (query) => {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._response(json))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: `An error occured ${error}`
        }));
  };

  _response = (response) => {
    this.setState({ isLoading: false, message: '' });
    if (response.length) {
      this.setState({
        isLoading: false,
        message: '',
        products: response,
      });
    } else {
      this.setState({ message: 'No results, try again.'});
    }
  };

  onProductPress = (response) => {
    this.props.navigation.navigate('Product', response);
  }

  render() {
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;

    return (
      <View style={CONTAINER.container}>

        <SearchBar
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        {spinner}

        <List
          products={this.state.products}
          onProductPress={this.onProductPress}
        />

      </View>
    );
  }
}
