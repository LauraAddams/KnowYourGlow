import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import FetchTagged from '../Actions/FetchTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';
import CheckForm from '../components/CheckForm';
import RemoveForm from '../components/RemoveForm';
import { CONTAINER } from '../config/styles';
import text from '../config/text';
import SearchBar from '../components/SearchBar';


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
      tagged: 'cooler',
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ taggedIngredients: Store.getState().main });
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

  _onPressTagged = (term) => {
    // this.props.FetchTagged();
    console.log('$$$$$$$$$$');
    console.log(this.state);
  };

  render() {

    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;


    const { taggedIngredients } = this.state;
    let tagged = [];

    if(taggedIngredients) {
      tagged = taggedIngredients.map((name, index) => {
        return (
          <RemoveForm key={index} name={name} />
        );
      });
    }

    const ingredients = (this.state.products).map((name, index) =>
    taggedIngredients.includes(name.ingredient) ? (<CheckForm key={index} name={name.ingredient} tagColor='#FEE284' />) :
    (<CheckForm key={index} name={name.ingredient} tagColor='#fbfbfb'/>));

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

        <Button
          title='Tag selected ingredients'
          iconRight={{name: 'sentiment-neutral', color: 'black', size: 24}}
          color='black'
          backgroundColor='rgba(0,0,0,0)'
          onPress={() => this._onPressTagged(this.state.tagged)}
        />

      </View>
    );
  }
}

export default connect(mapStateToProps, { FetchTagged })(TaggedIngredients);
