import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';

import text from '../config/text';

const width = Dimensions.get('window').width;

class ListItem extends React.PureComponent {

  render() {
    const item = this.props.item;
    const name = item.ingredient[0].toUpperCase() + item.ingredient.slice(1);

    return (
          <View>
            <View>
              <Text style={text.medium}
                numberOfLines={1}>{name}</Text>
            </View>
            <View style={styles.separator}/>
          </View>
    );
  }
}

export default class ListView extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.ingredients}
        keyExtractor={this._keyExtractor}
        renderItem={this._render}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    marginTop: 15,
    marginBottom: 15,
    height: 1,
    backgroundColor: 'red',
  },
});
