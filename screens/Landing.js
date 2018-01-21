/* eslint-disable */

import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, Dimensions, Animated, StyleSheet, Easing } from 'react-native';
import SortableList from 'react-native-sortable-list';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import Store from '../Store';

import text from '../config/text';
import { CONTAINER, BG_COLOR, BLACK } from '../config/styles';

const { height, width } = Dimensions.get('window');
const currTime = new Date().getHours();
const timeStyle = currTime < 13 ? ['Morning', 'wb-sunny', 'Evening', 'brightness-2'] :
  ['Evening', 'brightness-2', 'Morning', 'wb-sunny'];

function mapStateToProps(state) {
  return { routine: state.main };
}

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: timeStyle[0],
      currentIcon: timeStyle[3],
    };
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    if (!this.state.routineData) {
      this.setState({ routine: Store.getState().main.routineData });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ routine: nextProps.routine.routineData });
  }

  _handlePress = () => {
    this.props.navigation.navigate('Tagged');
  }

  _onPressTime = () => {
    if (this.state.currentMessage !== timeStyle[2]) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1500,
      }).start();

      this.setState({
        currentMessage: timeStyle[2],
        currentIcon: timeStyle[1],
      });
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 1500,
      }).start();

      this.setState({
        currentMessage: timeStyle[0],
        currentIcon: timeStyle[3],
      });
    }
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    const animatedStyle = {
      transform: [ { rotate: interpolateRotation }, ],
    };

    const list = {}
    const { routine } = this.state;

    if (routine) {
      routine.forEach((name, index) => { list[index] = name });
    } else {
      return (<Text>ERROR! NO ROUTINE!</Text>)
    }

    const data = list;

    return (
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: BG_COLOR }}>
        <Icon name={this.state.currentIcon} onPress={this._onPressTime} size={28} color={BLACK} containerStyle={{position: 'absolute', right: 15 }} />
        <Animated.View style={[{position: 'absolute', top: 60}, animatedStyle]}>
          <Icon name={timeStyle[1]} size={40} color={BLACK} containerStyle={{paddingLeft: 70, paddingBottom: 20 }} />
          <Icon name={timeStyle[3]} size={40} color={BLACK} containerStyle={{paddingRight: 70, paddingTop: 20 }} />
        </Animated.View>

        <View style={{ width: width, marginTop: 100, marginBottom: 20, paddingLeft: 50 }}>
          <Text style={[text.smallBold, { fontSize: 26, backgroundColor: 'rgba(0,0,0,0)' }]}>Good</Text>
          <Text style={[text.smallBold, { fontSize: 26, paddingLeft: 60, paddingBottom: 20 }]}>{this.state.currentMessage}</Text>
        </View>

        <View style={{ flex: 1, marginBottom: 30 }}>
          <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderRow={this._renderRow} />
        <Text style={[text.smallBold, {textAlign: 'center'}]} onPress={this._handlePress}>My Tagged Ingredients</Text>
        </View>
      </View>
    );
  }

  _renderRow = ({ data, active }) => <Row data={data} active={active} />
}

class Row extends React.Component {

  constructor(props) {
    super(props);

    this._active = new Animated.Value(0);

    this._style = {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start();
    }
  }

  render() {
   const {data, active} = this.props;

    return (
      <Animated.View style={[
        styles.row,
        this._style,
      ]}>
        <Text style={text.p}>{data}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: width / 1.2,
  },
  row: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default connect(mapStateToProps, { PostRoutine })(Landing);
