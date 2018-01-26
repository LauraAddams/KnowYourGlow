/* eslint-disable */
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import PostRoutine from '../Actions/PostRoutine';
import PostNightRoutine from '../Actions/PostNightRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';
import text from '../config/text';
import ModalContainer from './Modal';
import { CONTAINER, GRAY } from '../config/styles';

class ListItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      visibleModal: false,
    };
  }

  componentDidMount() {
    this.setState({
      routine: Store.getState().main.routineData,
      nightRoutine: Store.getState().main.nightRoutineData,
    });
  }

  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  _onPressAdd = () => {
    this.setState({
      visibleModal: true,
    });
  }

  goBack() {
  }

  resetVisible() {
    this.setState({ visibleModal: false });
  }

  addType(type) {
    const { brand, name } = this.props.item;
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
    let { brand, name, ingredient } = this.props.item;

    if (this.props.item.brand) {
      name = name.toUpperCase();
    } else {
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
    }

    const textResult = brand ?
    (<View style={[styles.container, {borderColor: this.props.borderColor}]}>

      <View style={[CONTAINER.details, {marginBottom: 5}]}>
        <Text style={text.smallBold}>{brand}</Text>
        <Icon name="add" size={16} iconStyle={styles.addIcon} onPress={this._onPressAdd}/>
      </View>

      <Text style={[text.medium, {fontSize: 13}]} >{name}</Text>

    </View>) :
      <View style={styles.container}><Text style={text.medium}>{ingredient}</Text></View>;

    return (
      <View>
        <TouchableHighlight
          onPress={this._onPress}
          underlayColor='#f9f9f9'>
          {textResult}
        </TouchableHighlight>
        <ModalContainer resetVisible={this.resetVisible.bind(this)} goBack={this.goBack.bind(this)} addType={this.addType.bind(this)} isVisible={this.state.visibleModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addIcon: {
    color: GRAY,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: GRAY,
    marginTop: -20,
    marginRight: -12,
  },
});

export default connect(mapStateToProps, { PostRoutine, PostNightRoutine })(ListItem);
