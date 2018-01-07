/* eslint-disable */
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Landing from '../screens/Landing';
import SearchProduct from '../screens/SearchProduct';
import Product from '../screens/Product';
import AddProduct from '../screens/AddProduct';
import CompareProduct from '../screens/CompareProduct';
import MyRoutine from '../screens/MyRoutine';
import TaggedIngredients from '../screens/TaggedIngredients';

export const Tabs = TabNavigator({
  Home: {
    screen: Landing,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="brightness-1" size={35} color={tintColor}/>
    },
  },
  SearchProduct: {
    screen: SearchProduct,
    navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor}/>
    },
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
        tabBarLabel: 'Add',
        tabBarIcon: ({ tintColor }) => <Icon name="add" size={35} color={tintColor}/>
    },
  },
  CompareProduct: {
    screen: CompareProduct,
    navigationOptions: {
        tabBarLabel: 'Compare',
        tabBarIcon: ({ tintColor }) => <Icon name="tonality" size={35} color={tintColor}/>
    },
  },
});
