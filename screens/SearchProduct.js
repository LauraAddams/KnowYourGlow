import React, { Component } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import { searchProducts } from '../api/helper';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import { CONTAINER, BG_COLOR } from '../config/styles';

export default class SearchProduct extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
      emptyState: true,
    };
  }

  onPressSearch = (term) => {
    const query = searchProducts(term);
    this._query(query);
  };

  onProductPress = (response) => {
    this.props.navigation.navigate('Product', response);
  }

  _query = (query) => {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._response(json))
      .catch(error =>
        this.setState({ isLoading: false, message: `An error occured ${error}` }));
  };

  _response = (response) => {
    this.setState({ isLoading: false, message: '' });

    if (response.length) {
      this.setState({
        isLoading: false,
        message: '',
        products: response,
        emptyState: false
      });
    } else {
      this.setState({ message: 'No results, try again.' });
    }
  };

  _renderEmpty = () => {
    if (this.state.emptyState) {
      return (
        <View style={{ position: 'absolute', zIndex: -1 }}>
          <Image source={require('../assets/whoosh.png')} style={{ width: 400, resizeMode: 'contain' }} />
        </View>
      );
    }
    return null;
  }

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size="large" /> : null;

    return (
      <View style={[CONTAINER.container, {
          paddingTop: 20,
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: BG_COLOR,
        }]}
      >

        <SearchBar
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        {spinner}
        {this._renderEmpty()}

        <List
          products={this.state.products}
          onProductPress={this.onProductPress}
        />

      </View>
    );
  }
}
