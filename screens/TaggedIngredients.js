import React from 'react';
import { View, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import PostTagged from '../Actions/PostTagged';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import { searchIngredients } from '../api/helper';
import CheckForm from '../components/CheckForm';
import RemoveForm from '../components/RemoveForm';
import SearchBar from '../components/SearchBar';
import { CONTAINER, BG_COLOR, HIGHLIGHT, BLACK } from '../config/styles';
import text from '../config/text';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BG_COLOR,
    paddingTop: 20,
  },
  buttonGroup: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    borderWidth: 0,
  },
});

class TaggedIngredients extends React.Component {
  static navigationOptions=({ navigation }) => ({
    headerRight: <Icon name="settings" size={24} color={BLACK} containerStyle={{paddingRight: 10}} onPress={()=> navigation.navigate('Settings')} />
  });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
      products: [],
      selectedIndex: 0,
      taggedIngredients: Store.getState().main.tagData,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  onPressSearch = (term) => {
    const query = searchIngredients(term);
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
          message: `An error occured ${error}`,
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
      this.setState({ message: 'No results, try again.' });
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
        <RemoveForm key={index} name={name} index={index} _handlePress={this._onRemovePress.bind(this)} />);
    }

    const ingredients = (this.state.products).map((name, index) => {
      const info = taggedIngredients.includes(name.ingredient) ? [HIGHLIGHT, true] : ['#FBFBFB', false];
      return (
        <CheckForm
          onPress={this._onCheckPress.bind(this, index)}
          key={index}
          name={name.ingredient}
          checked={info[1]}
          tagColor={info[0]}
        />
      );
    });

    const icon1 = () => <Icon type="material-community" name="tag-multiple" size={24} color={BLACK} />;
    const icon2 = () => <Icon name="add" size={24} color={BLACK} />;
    const buttons = [{ element: icon1 }, { element: icon2 }];

    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          textStyle={text.small}
          containerStyle={styles.buttonGroup}
          innerBorderStyle={{ color: 'transparent' }}
        />

        <Swiper
          style={styles.wrapper}
          showsPagination={false}
          loop={false}
          index={this.state.selectedIndex}
        >

          <View style={styles.slide}>
            <View style={CONTAINER.taggedContainer}>
              {tagged}
            </View>
          </View>

          <View style={styles.slide}>
            <SearchBar loading={this.state.isLoading} onPressSearch={this.onPressSearch} />
            {spinner}
            <ScrollView automaticallyAdjustContentInsets={false}>
              {ingredients}
            </ScrollView>
          </View>

        </Swiper>
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostTagged })(TaggedIngredients);
