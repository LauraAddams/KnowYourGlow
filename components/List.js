import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import PostRoutine from '../Actions/PostRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import ListItem from './ListItem';

function url(id) {
  return `https://skincare-api.herokuapp.com/products/${id}`;
}

class List extends Component<{}> {
  componentDidMount() {
    this.setState({
      routine: Store.getState().main.routineData,
     });
  }

  _keyExtractor = (item, index) => index;

  _render = ({ item, index }) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
      onPressAdd={this._onPressAdd}
    />
  );

  _onPressItem = (id) => {
    this._query(url(id));
  };

  _onPressAdd = (brand, name) => {
    const full = brand.toUpperCase() + ' ' + name;

    if (!this.state.routine.includes(full)) {
      (this.state.routine).push(full);
    }
  };

  _query = (query) => {
    fetch(query)
      .then(response => response.json())
      .then(json => this._response(json))
      .catch(error =>
        this.setState({
          message: 'Something bad happened ' + error
        }));
  };

  _response = (response) => {
    if (response) {
      this.props.onProductPress(response);
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
  };

  render() {
    return (
      <FlatList
        style={{ alignSelf: 'stretch' }}
        data={this.props.products}
        keyExtractor={this._keyExtractor}
        renderItem={this._render}
      />
    );
  }
}

export default connect(mapStateToProps, { PostRoutine })(List);
