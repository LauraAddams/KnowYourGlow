/* eslint-disable */

import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { List, ListItem, ButtonGroup, Icon } from 'react-native-elements';

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
    const icon1 = () => <Icon name="view-stream" size={24}/>
    const icon2 = () => <Icon name="view-list" size={24}/>
    const buttons = [{element: icon1}, {element: icon2}]
    const { selectedIndex } = this.state;

    let { brand, name, ingredient_list } = this.props.navigation.state.params;
    name = name[0].toUpperCase() + name.slice(1);

    const tagged = 'betaine';

    const listItems = ingredient_list.map((ing, i) =>
    ing === tagged ? (<ListItem title={ing} key={i} containerStyle={{backgroundColor: '#FEE284'}} hideChevron={true}/>) :
      (<ListItem title={ing} key={i} hideChevron={true}/>));

    const paraItems = ingredient_list.map((ing, i) =>
    ing === tagged ? (<Text key={i} style={{backgroundColor: '#FEE284'}}>{ing}, </Text>) :
    (<Text key={i}>{ing}, </Text>));

    const content = this.state.selectedIndex === 0 ? (<Text style={[text.p, {textAlign: 'justify', lineHeight: 26}]}>{paraItems}</Text>) :
    (<List style={[styles.list]} containerStyle={{marginTop: 0}}>{listItems}</List>)

    return (
      <View style={{flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 30, backgroundColor: 'white'}}>

        <Text style={[text.smallBold, {textAlign: 'center'}]}>{brand.toUpperCase()}</Text>
        <Text style={[text.medium, {textAlign: 'center'}]}>{name}</Text>

        <View style={styles.details}>
          <View style={styles.details}>
            <Icon name="favorite" size={24} iconStyle={{color: 'red', marginRight: 10}}/>
            <Icon name="add-circle" size={24} />
          </View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 36, width: 74, backgroundColor: '#eeeeee', borderWidth: 0, marginTop: 15, marginBottom: 10}}
            selectedBackgroundColor={'#f5f5f5'}
            innerBorderStyle={{color: '#f5f5f5'}}
            />
        </View>

        <Text style={[text.small, {marginTop: 20}]}>INGREDIENTS:</Text>

        <ScrollView style={{margin: 10}}>
          {content}
        </ScrollView>

        <View>
          <Text style={[text.small, {textAlign: 'center'}]}>THIS INFORMATION IS CORRECT</Text>
          <View style={[styles.details, {justifyContent: 'center'}]}>
            <Icon name="sentiment-dissatisfied" size={30} iconStyle={{padding: 10}}/>
            <Icon name="sentiment-satisfied" size={30} iconStyle={{padding: 10}}/>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
