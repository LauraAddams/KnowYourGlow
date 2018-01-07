import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Landing from '../screens/Landing';
import SearchProduct from '../screens/SearchProduct';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'HEYO',
    },
  },
  SearchProduct: {
    screen: SearchProduct,
    navigationOptions: {
      title: 'YOLO',
    },
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
    },
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
        tabBarLabel: 'Landing',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor}/>
    },
  },
});
