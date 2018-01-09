import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

import ListView from '../components/ListView';
import text from '../config/text';
import { CONTAINER } from '../config/styles';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

export default class SearchProduct extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'Cosrx Honey',
      isLoading: false,
      message: '',
      products: [],
    };
  }

  _onSearchTextChanged = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  _onSearchPressed = () => {
    const query = url(this.state.searchString);
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

  render() {
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;

    return (
      <View style={CONTAINER.container}>
        <Text style={[text.smallBold, { marginTop: 35, marginBottom: 20 }]}>SEARCH PRODUCTS</Text>

        <View style={CONTAINER.search}>
          <TextInput
            style={CONTAINER.input}
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
            placeholder="Search"
          />
          <Button
            onPress={this._onSearchPressed}
            color="#333333"
            title="GO"
          />
        </View>

        {spinner}

        <ListView
          products={this.state.products}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
