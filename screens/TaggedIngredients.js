import React from 'react';
import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import PostTagged from '../Actions/PostTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import CheckForm from '../components/CheckForm';
import RemoveForm from '../components/RemoveForm';
import SearchBar from '../components/SearchBar';
import { CONTAINER } from '../config/styles';
import text from '../config/text';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/ingredient?q=${input}`;
}

class TaggedIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ taggedIngredients: Store.getState().main.tagData });
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

  _onRemovePress = (ingredientIndex) => {
    const currTagged = this.state.taggedIngredients;

    currTagged.splice(ingredientIndex, 1);
    this.props.PostTagged(currTagged);
    this.setState({ taggedIngredients: currTagged });
  }

  _onCheckPress = (index) => {
    const { taggedIngredients, products } = this.state;
    const currTagged = this.state.taggedIngredients;
    const ingredientIndex = taggedIngredients.indexOf(products[index].ingredient);

    if (ingredientIndex === -1) {
      currTagged.push(this.state.products[index].ingredient);
    } else {
      currTagged.splice(ingredientIndex, 1);
    }

    this.props.PostTagged(currTagged);
    this.setState({ taggedIngredients: currTagged });
  };

  render() {
    let tagged = [];
    const { taggedIngredients } = this.state;
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;

    if (taggedIngredients) {
      tagged = taggedIngredients.map((name, index) =>
        <RemoveForm key={index} name={name} index={index} _handlePress={this._onRemovePress.bind(this)} />)
    }

    const ingredients = (this.state.products).map((name, index) => {
      const info = taggedIngredients.includes(name.ingredient) ? ['#FEE284', true] : ['#FBFBFB', false];
      return (
        <CheckForm onPress={this._onCheckPress.bind(this, index)} key={index} name={name.ingredient} checked={info[1]} tagColor={info[0]} />
      );
    });

    return (
      <View style={[CONTAINER.container, { paddingTop: 10, backgroundColor: 'white' }]}>
        <View style={{ height: 200, alignSelf: 'stretch', alignItems: 'center' }}>
          <Text style={[text.smallBold, { marginBottom: 20 }]}>Tagged Ingredients</Text>
          <ScrollView>
            {tagged}
          </ScrollView>
        </View>

        <SearchBar
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        {spinner}

        <ScrollView automaticallyAdjustContentInsets={false}>
          {ingredients}
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostTagged })(TaggedIngredients);
