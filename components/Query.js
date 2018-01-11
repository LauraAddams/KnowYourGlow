import React, { Component } from 'react';
import { Text } from 'react-native';

// figure out how to utilize a query components
// for DRY code, pass url.. etc

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

export default class Query extends Component<{}> {
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

  render() {
    return (
      <Text>hi</Text>
    );
  }
}
