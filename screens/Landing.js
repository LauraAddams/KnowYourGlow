/* eslint-sable */
import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, Dimensions, Animated, StyleSheet, Easing } from 'react-native';
import SortableList from 'react-native-sortable-list';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import PostNightRoutine from '../Actions/PostNightRoutine';
import Store from '../Store';

import text from '../config/text';
import { BG_COLOR, BLACK } from '../config/styles';

const { width } = Dimensions.get('window');
const currTime = new Date().getHours();
const timeStyle = currTime < 15 ? ['Morning', 'ios-sunny', 'Evening ', 'ios-moon'] :
  ['Evening ', 'ios-moon', 'Morning', 'ios-sunny'];

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
      this.setState({
        routine: Store.getState().main.routineData,
        nightRoutine: Store.getState().main.nightRoutineData,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      routine: nextProps.routine.routineData,
      nightRoutine: nextProps.routine.nightRoutineData,
    });
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
      outputRange: ['30deg', '210deg'],
    });

    const animatedStyle = {
      transform: [ { rotate: interpolateRotation }, ],
    };

    const list = {}
    const { routine, nightRoutine, currentMessage, currentIcon } = this.state;

    const currentRoutine = (currentMessage === 'Morning') ? routine : nightRoutine;

    if (currentRoutine) {
      currentRoutine.forEach((name, index) => { list[index] = name });
    } else {
      return (<Text>ERROR! NO ROUTINE!</Text>)
    }

    const data = list;

    return (
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: BG_COLOR }}>
        <Icon type="ionicon" name={currentIcon} onPress={this._onPressTime} size={28} color={BLACK} containerStyle={{position: 'absolute', right: 15 }} />

        <Animated.View style={[{position: 'absolute', top: 20}, animatedStyle]}>
          <Icon type="ionicon" name={timeStyle[1]} size={40} color={BLACK} containerStyle={{paddingLeft: 40, paddingBottom: 25}} />
          <Icon type="ionicon" name={timeStyle[3]} size={40} color={BLACK} containerStyle={{paddingRight: 40, paddingTop: 25 }} />
        </Animated.View>

        <View style={{ marginTop: 90 }}>
          <Text style={[text.smallBold, { fontSize: 26, paddingBottom: 20 }]}>Good {currentMessage}</Text>
        </View>

        <View style={{ flex: 1, marginBottom: 30, width: '100%', alignItems: 'center', backgroundColor: BG_COLOR }}>
          <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderRow={this._renderRow} />
        <Icon type="material-community" name='tag-multiple'  size={28} color={BLACK} />
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
              outputRange: [1, 1.07],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 10],
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
        <Text style={text.smallBold}>{data}</Text>
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
    width: width / 1.1,
    padding: 10,
  },
  row: {
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 15,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default connect(mapStateToProps, { PostRoutine })(Landing);
