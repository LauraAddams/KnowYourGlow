import React from 'react';
import { Icon } from 'react-native-elements';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import SortableListView from 'react-native-sortable-listview'

import text from '../config/text';

let data = {
  hello: { text: 'world' },
  how: { text: 'are you' },
  test: { text: 123 },
};

let order = Object.keys(data);

class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.text}</Text>
      </TouchableHighlight>
    )
  }
}


export default class Landing extends React.Component {
  static navigationOptions=({ navigation }) => ({
    headerRight: <Icon name="settings" size={24} color='#e1e1e1' containerStyle={{paddingRight: 10}} onPress={()=> navigation.navigate('Settings')} />
  });

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Icon name="wb-sunny" size={30} />
        <Text style={[text.smallBold, { padding: 15 }]}>Good Morning</Text>
        <Text style={text.p}onPress={this._handlePress}>My Tagged Ingredients</Text>
        <SortableListView
          style={{ flex: 1 , marginTop: 40}}
          data={data}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.forceUpdate()
          }}
          renderRow={row => <RowComponent data={row} />}
        />
      </View>
    )
  }
}
