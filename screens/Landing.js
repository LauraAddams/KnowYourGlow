/* eslint-disable */

import React from 'react';
import { Icon, Button } from 'react-native-elements';
import { Text, View, TouchableHighlight, Image, Dimensions, Animated } from 'react-native';
import SortableListView from 'react-native-sortable-listview';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import RowComponent from '../components/RowComponent';
import text from '../config/text';
import { CONTAINER } from '../config/styles';

const {height, width} = Dimensions.get('window');
const currTime = new Date().getHours();
const timeStyle = currTime < 13 ? ['Morning', "wb-sunny", 'Evening', "brightness-2"] :
['Evening', "brightness-2", 'Morning', "wb-sunny"];

const list = {
  1: 'GLOSSIER milky jelly cleanser',
  2: 'AMOREPACIFIC Treatment cleansing oil',
  3: 'SU:M37 Miracle rose cleansing stick',
};

const list2 = {
  1: 'COSRX Snail 96 essence cream',
  2: 'GENERIC Jojoba oil',
  3: 'CETAPHIL Gentle moisturizer lotion',
};

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: timeStyle[0],
      currentIcon: timeStyle[3],
      data: currTime < 13 ? list : list2,
    }
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.setState({ routine: Store.getState().main.routineData });
  }

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  _onPressTime = () => {
    if (this.state.currentMessage !== timeStyle[2]) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1500
      }).start()

      this.setState({
        currentMessage: timeStyle[2],
        currentIcon: timeStyle[1],
        data: list2,
      });
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 1500
      }).start()

      this.setState({
        currentMessage: timeStyle[0],
        currentIcon: timeStyle[3],
        data: list,
      });
    }
  }

  render() {
    // const list = {}
    // const { routine } = this.state;
    //
    // if (routine) {
    //   routine.forEach((name, index) => { list[index] = name });
    // }
    //
    // const data = list;
    // const order = Object.keys(data);

    const data = this.state.data;
    const order = Object.keys(data);

    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation },
      ],
    };

    return (
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#F6F3EC' }}>
        <Icon name={this.state.currentIcon} onPress={this._onPressTime} size={28} containerStyle={{position: 'absolute', right: 15 }} />

        <Animated.View style={[{position: 'absolute', top: 60}, animatedStyle]}>
          <Icon name={timeStyle[1]} size={40} containerStyle={{paddingLeft: 70, paddingBottom: 20 }} />
          <Icon name={timeStyle[3]} size={40} containerStyle={{paddingRight: 70, paddingTop: 20 }} />
        </Animated.View>

        <View style={[CONTAINER.landing, { width: width, paddingLeft: 20 }]}>
          <Image source={require('../assets/yellblob.png')} style={{ width: 260, height: 180, resizeMode: 'contain' }} />
        </View>

        <View style={{ width: width, marginTop: 100, marginBottom: 50, paddingLeft: 50 }}>
          <Text style={[text.smallBold, { fontSize: 26, backgroundColor: 'rgba(0,0,0,0)' }]}>Good</Text>
          <Text style={[text.smallBold, { fontSize: 26, paddingLeft: 60, backgroundColor: 'rgba(0,0,0,0)' }]}>{this.state.currentMessage}</Text>
        </View>

        <View style={{ flex: 1, marginBottom: 30 }}>
          <SortableListView
            style={{ }}
            data={data}
            order={order}
            onRowMoved={(e) => {
              order.splice(e.to, 0, order.splice(e.from, 1)[0]);
              this.forceUpdate();
            }}
            renderRow={row => <RowComponent data={row} />}
          />
        <Text style={[text.smallBold, {textAlign: 'center'}]} onPress={this._handlePress}>My Tagged Ingredients</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostRoutine })(Landing);
