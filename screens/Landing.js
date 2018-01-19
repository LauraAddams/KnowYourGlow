/* eslint-disable */

import React from 'react';
import { Icon, Button } from 'react-native-elements';
import { Text, View, TouchableHighlight, Image, Dimensions, Animated } from 'react-native';
import SortableListView from 'react-native-sortable-listview';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import mapStateToProps from '../config/ReducerHelper';
import Store from '../Store';

import text from '../config/text';
import { CONTAINER } from '../config/styles';

const {height, width} = Dimensions.get('window');
const currTime = new Date().getHours();
const timeStyle = currTime < 13 ? ['Morning', "wb-sunny", 'Evening', "brightness-2"] : ['Evening', "brightness-2", 'Morning', "wb-sunny"];

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: timeStyle[0],
      currentIcon: timeStyle[3],
    }
  }

  componentDidMount() {
    this.setState({ routine: Store.getState().main.routineData });
  }

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  _onPressTime = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()

    this.setState({
      currentMessage: timeStyle[2],
      currentIcon: timeStyle[1],
    });
  }

  render() {
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
          <Icon name={timeStyle[1]} size={40} containerStyle={{paddingLeft: 60, paddingBottom: 15 }} />
          <Icon name={timeStyle[3]} size={40} containerStyle={{paddingRight: 60, paddingTop: 15 }} />
        </Animated.View>

        <View style={[CONTAINER.landing, { width: width }]}>
          <Image source={require('../assets/yellblob.png')} style={{ width: 320, height: 200, resizeMode: 'contain' }} />
        </View>

        <View style={{ flex: 1, width: width, marginTop: 110 }}>
          <Text style={[text.smallBold, { fontSize: 24, paddingLeft: 70, backgroundColor: 'rgba(0,0,0,0)' }]}>Good</Text>
          <Text style={[text.smallBold, { fontSize: 24, paddingLeft: 120, backgroundColor: 'rgba(0,0,0,0)' }]}>{this.state.currentMessage}</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'pink'}}>
          <Text style={text.p} onPress={this._handlePress}>My Tagged Ingredients</Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, { PostRoutine })(Landing);
