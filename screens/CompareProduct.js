import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { connect } from 'react-redux';
import PostTagged from '../Actions/PostTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import { CONTAINER, HIGHLIGHT } from '../config/styles';
import text from '../config/text';
import SearchCompare from '../components/SearchCompare';
import CheckForm from '../components/CheckForm';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/product?q=${input}`;
}

function intersect(a, b) {
  let t;
  if (b.length > a.length) t = b, b = a, a = t;
  return a.filter(e => b.indexOf(e) > -1);
}

class CompareProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      message: '',
      ing: [],
      ing2: [],
    };
  }

  componentDidMount() {
    this.setState({ taggedIngredients: Store.getState().main.tagData });
  }

  onPressSearch = (term, term2) => {
    const query = url(term);
    const query2 = url(term2);

    fetch(query).then(response => response.json()).then((responseData) => {
      this.setState({
        isLoading: false,
        ing: responseData[0].ingredient_list,
      });
    }).then(() => {
      fetch(query2).then(response => response.json()).then((responseData) => {
        this.setState({
          ing2: responseData[0].ingredient_list,
        });
      }).done();
    })
      .done();
  };

  _onPressTagged = () => {
    this.props.PostTagged(this.state.taggedIngredients);
    this.setState({ taggedIngredients: this.state.taggedIngredients });
  };

  _onCheckPress = (index) => {
    const products = intersect(this.state.ing, this.state.ing2);
    const { taggedIngredients } = this.state;
    const currTagged = this.state.taggedIngredients;
    const ingredientIndex = taggedIngredients.indexOf(products[index]);

    if (ingredientIndex === -1) {
      currTagged.push(products[index]);
    } else {
      currTagged.splice(ingredientIndex, 1);
    }
  };

  render() {
    const ingList = intersect(this.state.ing, this.state.ing2);
    const { taggedIngredients } = this.state;

    if (!taggedIngredients) {
      return <Text />;
    }

    const ingredients = ingList.map((name, index) => {
      const info = taggedIngredients.includes(name) ? [HIGHLIGHT, true] : ['#FBFBFB', false];
      return (<CheckForm onPress={this._onCheckPress.bind(this, index)} key={index} name={name} tagColor={info[0]} checked={info[1]} />);
    });

    return (
      <View style={CONTAINER.container}>

        <Text style={[text.smallBold, {paddingBottom: 5}]}>Multiple products irritating your skin?</Text>
        <Text style={text.smallBold}>Find their common ingredients</Text>

        <SearchCompare
          loading={this.state.isLoading}
          onPressSearch={this.onPressSearch}
        />

        <ScrollView style={{ marginTop: 20 }} automaticallyAdjustContentInsets={false}>
          {ingredients}
        </ScrollView>

        <Button
          containerViewStyle={{alignSelf: 'flex-end'}}
          iconRight={{ name: 'check', color: 'black', size: 24 }}
          title="Add Checked"
          backgroundColor="rgba(0,0,0,0)"
          textStyle={text.small}
          color="black"
          onPress={() => this._onPressTagged()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostTagged })(CompareProduct);
