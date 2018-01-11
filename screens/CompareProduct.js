/* eslint-disable */
import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';

import text from '../config/text';
import { CONTAINER } from '../config/styles';
import SearchBar from '../components/SearchBar';
import CheckForm from '../components/CheckForm';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

export default class CompareProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
    };
  };

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
        products: response[0].ingredient_list,
      });
    } else {
      this.setState({ message: 'No results, try again.'});
    }
  };

  render() {
      const ing_list = this.state.products;
      const ingredients = ing_list.map((name, index) => {
        return <CheckForm key={index} name={name} />;
      });

    return (
      <View style={CONTAINER.container}>
        <Text style={[text.smallBold, {marginTop: 30, marginBottom: 30}]}>COMPARE PRODUCTS</Text>
        <View style={CONTAINER.form}>
          <SearchBar
            loading={this.state.isLoading}
            onPressSearch={this.onPressSearch}
            />
          <Button
            iconRight={{name: 'add-circle', color: 'black', size: 20}}
            backgroundColor='rgba(0,0,0,0)'
            onPress={this._handlePress}
            />
          <View style={{margin: 10}}>
            {ingredients}
          </View>
        </View>
      </View>
    )
  }

  _handlePress = () => {
  }
}
