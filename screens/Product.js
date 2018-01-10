/* eslint-disable */

import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { List, ListItem, ButtonGroup } from 'react-native-elements';
import text from '../config/text';

export default class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = ['Paragraph', 'List']
    const { selectedIndex } = this.state;
    const { brand, name, ingredient_list } = this.props.navigation.state.params;
    const listItems = ingredient_list.map((ing, i) => <ListItem title={ing} key={i} hideChevron={true}/>);

    const content = this.state.selectedIndex === 0 ? (<Text style={text.p}>{ingredient_list}</Text>) :
    (<List style={styles.list}>{listItems}</List>)

    return (
      <View style={{flex: 1}}>
        <Text style={text.smallBold}>{brand.toUpperCase()}</Text>
        <Text style={text.medium}>{name}</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}}
        />
        <ScrollView>
          {content}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})
