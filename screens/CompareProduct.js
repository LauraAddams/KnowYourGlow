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
import SearchCompare from '../components/SearchCompare';
import CheckForm from '../components/CheckForm';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t;
  return a.filter(function (e) {
    return b.indexOf(e) > -1;
  });
}

export default class CompareProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      tagged: [],
      ing: [],
      ing2: [],
    };
  };

  onPressTagged = (term) => {
    console.log(term);
  };

  onPressSearch = (term, term2) => {
    const query = url(term);
    const query2 = url(term2);

    fetch(query).then((response) => response.json()).then((responseData)  => {
      this.setState({
        isLoading: false,
        ing: responseData[0].ingredient_list,
      });
    }).then(()=>{
      fetch(query2).then((response) => response.json()).then((responseData) => {
        this.setState({
          ing2: responseData[0].ingredient_list,
        });
      }).done();
    }).done();
  };

  render() {
      const ing_list = intersect(this.state.ing, this.state.ing2);
      const ingredients = ing_list.map((name, index) => {
        return <CheckForm key={index} name={name} />;
      });

    return (
      <View style={CONTAINER.container}>
        <SearchCompare
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        <ScrollView style={{marginTop: 20}} automaticallyAdjustContentInsets={false}>
          {ingredients}
        </ScrollView>

        <Button
          title='Tag selected ingredients'
          iconRight={{name: 'sentiment-neutral', color: 'black', size: 24}}
          color='black'
          backgroundColor='rgba(0,0,0,0)'
          onPress={() => this.props.onPressTagged(this.state.tagged)}
        />
      </View>
    )
  }
}
