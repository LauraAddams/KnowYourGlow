import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
} from 'react-native';

import CheckForm from '../components/CheckForm';
import { CONTAINER } from '../config/styles';
import SearchBar from '../components/SearchBar';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/ingredient?q=${input}`;
}

export default class TaggedIngredients extends React.Component {
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

  render() {
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;
    const ingredients = (this.state.products).map((name, index) => {
      return <CheckForm key={index} name={name.ingredient} />;
    });

    return (
      <View style={[CONTAINER.container, { paddingTop: 30, backgroundColor: 'white' }]}>

        <SearchBar
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        {spinner}

        <ScrollView style={{marginTop: 20}} automaticallyAdjustContentInsets={false}>
          {ingredients}
        </ScrollView>

      </View>
    );
  }

}
