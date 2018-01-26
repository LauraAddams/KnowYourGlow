/* eslint-disable */
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem, ButtonGroup, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import PostRoutine from '../Actions/PostRoutine';
import PostNightRoutine from '../Actions/PostNightRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';
import text from '../config/text';
import ModalContainer from '../components/Modal';
import { CONTAINER, BG_COLOR, HIGHLIGHT, BLACK } from '../config/styles';

class Product extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      visibleModal: false,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    this.setState({
      taggedIngredients: Store.getState().main.tagData,
      routine: Store.getState().main.routineData,
      nightRoutine: Store.getState().main.nightRoutineData,
    });
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  _onPressAdd = () => {
    this.setState({ visibleModal: true });
  }

  goBack() {
    this.props.navigation.goBack();
  }

  resetVisible() {
    this.setState({ visibleModal: false });
  }

  addType(type) {
    const { brand, name } = this.props.navigation.state.params;
    const full = brand.toUpperCase() + ' ' + name;

    switch (type) {
      case 'morning':
        if (!this.state.routine.includes(full)) {
          (this.state.routine).push(full);
          this.props.PostRoutine(this.state.routine);
        }
        break;
      case 'evening':
        if (!this.state.nightRoutine.includes(full)) {
          (this.state.nightRoutine).push(full);
          this.props.PostNightRoutine(this.state.nightRoutine);
        }
        break;
      case 'both':
        if (!this.state.routine.includes(full)) {
          (this.state.routine).push(full);
          this.props.PostRoutine(this.state.routine);
        }
        if (!this.state.nightRoutine.includes(full)) {
          (this.state.nightRoutine).push(full);
          this.props.PostNightRoutine(this.state.nightRoutine);
        }
        break;
      default:
        return console.log('error');
    }
  }



  render() {
    const icon1 = () => <Icon name="view-stream" size={24} color={BLACK} />;
    const icon2 = () => <Icon name="view-list" size={24} color={BLACK} />;
    const buttons = [{ element: icon1 }, { element: icon2 }];

    const { selectedIndex } = this.state;
    const { brand, ingredient_list, name } = this.props.navigation.state.params;
    const { taggedIngredients } = this.state;

    if (!taggedIngredients) {
      return <Text />;
    }

    const ingItems = ingredient_list.map((ingredient, i) => {
      const info = taggedIngredients.includes(ingredient) ? HIGHLIGHT : BG_COLOR;

      if (this.state.selectedIndex === 0) {
        return (<Text key={i} style={{ backgroundColor: info }}>{ingredient}, </Text>);
      }
      return (<ListItem key={i} title={ingredient} hideChevron={true} titleStyle={[text.p, {marginLeft: 0}]}
        containerStyle={[styles.listItem, {backgroundColor: info}]} />);
    });

    const content = this.state.selectedIndex === 0 ?
      (<Text style={[text.p, { lineHeight: 26, textAlign: 'justify' }]}>{ingItems}</Text>) :
      (<List style={{ flex: 1, justifyContent: 'flex-start' }} containerStyle={styles.list}>{ingItems}</List>)

    return (
      <View style={{ flex: 1, backgroundColor: BG_COLOR }}>
        <View>
          <View style={{marginTop: 30, marginBottom: 40}}>
            <Text style={[text.medium, { textAlign: 'center', margin: 8 }]}>{name.toUpperCase()}</Text>
            <Text style={[text.smallBold, { textAlign: 'center' }]}>{brand.toLowerCase()}</Text>
          </View>

          <View style={[CONTAINER.details, {marginLeft: 20, marginRight: 3}]}>
            <Text style={text.small}>INGREDIENTS:</Text>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={styles.buttonGroup}
              containerBorderRadius={10}
              selectedBackgroundColor={BG_COLOR}
              innerBorderStyle={{ color: BG_COLOR }}
              />
          </View>
        </View>

        <ScrollView style={styles.scroll}>
          {content}
          <Text />
        </ScrollView>

        <View style={styles.add}>
          <Icon reverse raised name="add" color={BLACK} size={16} onPress={() => this._onPressAdd()} />
        </View>

        <ModalContainer resetVisible={this.resetVisible.bind(this)} goBack={this.goBack.bind(this)} addType={this.addType.bind(this)} isVisible={this.state.visibleModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  listItem: {
    borderBottomWidth: 0,
    height: 28,
  },
  scroll: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0,
  },
  add: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  buttonGroup: {
    height: 28,
    width: 68,
    backgroundColor: BG_COLOR,
    borderWidth: 0,
  }
});

export default connect(mapStateToProps, { PostRoutine, PostNightRoutine })(Product);
