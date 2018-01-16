import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, TouchableHighlight } from 'react-native';
import SortableListView from 'react-native-sortable-listview';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import text from '../config/text';

const list = {
  1: 'Glossier milky jelly cleanser',
  2: 'Amorepacific Treatment cleansing oil',
  3: 'Su:m37 Miracle rose cleansing stick',
};

const data = list;
const order = Object.keys(data);

class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="#eee"
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data}</Text>
      </TouchableHighlight>
    );
  }
}

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.setState({ routine: Store.getState().main.routineData });
  }

  static navigationOptions=({ navigation }) => ({
    headerRight: <Icon name="settings" size={24} color='#e1e1e1' containerStyle={{paddingRight: 10}} onPress={()=> navigation.navigate('Settings')} />
  });

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  render() {
    let myRoutine = {};
    const { routine } = this.state;

    if (routine) {
      myRoutine = routine.map((name, index) => myRoutine[index] = name);
    }

    console.log(myRoutine);

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <Icon name="wb-sunny" size={30} />
        <Text>{this.state.routine}</Text>
        <Text style={[text.smallBold, { padding: 15 }]}>Good Morning</Text>
        <Text style={text.p}onPress={this._handlePress}>My Tagged Ingredients</Text>
        <SortableListView
          style={{ flex: 1 , marginTop: 40 }}
          data={data}
          order={order}
          onRowMoved={(e) => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0]);
            this.forceUpdate();
          }}
          renderRow={row => <RowComponent data={row} />}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostRoutine })(Landing);
