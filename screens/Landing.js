/* eslint-disable */
import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, Dimensions, Animated, StyleSheet, Easing } from 'react-native';
import SortableList from 'react-native-sortable-list';
import { NavigationActions } from 'react-navigation';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import { connect } from 'react-redux';
import PostRoutine from '../Actions/PostRoutine';
import Store from '../Store';

import text from '../config/text';
import { CONTAINER, BG_COLOR, BLACK } from '../config/styles';

const { width } = Dimensions.get('window');
const currTime = new Date().getHours();
const timeStyle = currTime < 15 ? ['Morning', 'ios-sunny', 'Evening ', 'ios-moon'] :
  ['Evening ', 'ios-moon', 'Morning', 'ios-sunny'];


const myRoutine = ({ routine, firebase }) => {
  const myRoutineList = !isLoaded(routine) ? 'Loading' :
    isEmpty(routine) ? 'Empty routine' : Object.keys(routine).map(
      (key, id) => (
        <Text key={key}>{key} {id}</Text>
      ),
    );
  return (
    <View>
      {myRoutineList}
    </View>
  );
};

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
      outputRange: ['30deg', '210deg'],
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
        <Icon type="ionicon" name={this.state.currentIcon} onPress={this._onPressTime} size={28} color={BLACK} containerStyle={{position: 'absolute', right: 15 }} />
        <Animated.View style={[{position: 'absolute', top: 25}, animatedStyle]}>
          <Icon type="ionicon" name={timeStyle[1]} size={40} color={BLACK} containerStyle={{paddingLeft: 40, paddingBottom: 25}} />
          <Icon type="ionicon" name={timeStyle[3]} size={40} color={BLACK} containerStyle={{paddingRight: 40, paddingTop: 25 }} />
        </Animated.View>

        <View style={{ marginTop: 90 }}>
          <Text style={[text.smallBold, { fontSize: 26, paddingBottom: 40 }]}>Good {this.state.currentMessage}</Text>
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
