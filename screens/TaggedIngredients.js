import React from 'react';
import { View, ActivityIndicator, ScrollView, Text, StyleSheet } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import PostTagged from '../Actions/PostTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import CheckForm from '../components/CheckForm';
import RemoveForm from '../components/RemoveForm';
import SearchBar from '../components/SearchBar';
import { CONTAINER, BG_COLOR, HIGHLIGHT } from '../config/styles';
import text from '../config/text';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return `https://skincare-api.herokuapp.com/ingredient?q=${input}`;
}

class TaggedIngredients extends React.Component {
  static navigationOptions=({ navigation }) => ({
    headerRight: <Icon name="settings" size={24} color='#929292' containerStyle={{paddingRight: 10}} onPress={()=> navigation.navigate('Settings')} />
  });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
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

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

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
    const spinner = this.state.isLoading ? <ActivityIndicator size="large" /> : null;

    if (taggedIngredients) {
      tagged = taggedIngredients.map((name, index) =>
        <RemoveForm key={index} name={name} index={index} _handlePress={this._onRemovePress.bind(this)} />)
    }

    const ingredients = (this.state.products).map((name, index) => {
      const info = taggedIngredients.includes(name.ingredient) ? [HIGHLIGHT, true] : ['#FBFBFB', false];
      return (
        <CheckForm onPress={this._onCheckPress.bind(this, index)} key={index} name={name.ingredient} checked={info[1]} tagColor={info[0]} />
      );
    });

    const view = this.state.selectedIndex === 0 ?
      <View style={CONTAINER.taggedContainer}>{tagged}</View> :
      (<View>
        <SearchBar loading={this.state.isLoading} onPressSearch={this.onPressSearch} />
        {spinner}

        <ScrollView automaticallyAdjustContentInsets={false}>
          {ingredients}
        </ScrollView>
      </View>);

    return (
      <Swiper style={styles.wrapper} showButtons={true}>
        <View style={styles.slide1}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            buttons={['Tagged', 'Add']}
            containerStyle={{ marginTop: -3, width: '100%', borderRadius: 0, borderWidth: 0 }}
            selectedBackgroundColor={BG_COLOR}
            innerBorderStyle={{ color: BG_COLOR }}
            />
          {view}
        </View>

        <View style={styles.slide2}>
          <Text>Hey</Text>
        </View>

      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
});

export default connect(mapStateToProps, { PostTagged })(TaggedIngredients);
