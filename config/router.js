/* eslint-disable */
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import LogIn from '../screens/LogIn';
import Landing from '../screens/Landing';
import SearchProduct from '../screens/SearchProduct';
import Product from '../screens/Product';
import AddProduct from '../screens/AddProduct';
import CompareProduct from '../screens/CompareProduct';
import MyRoutine from '../screens/MyRoutine';
import TaggedIngredients from '../screens/TaggedIngredients';
import Settings from '../screens/Settings';

import { FUTURA, FONT_BOLD } from './styles';

export const HomeStack = StackNavigator({
  Home: {
    screen: Landing,
    navigationOptions: {
      title: 'MY ROUTINE',
    },
  },
  Tagged: {
    screen: TaggedIngredients,
    navigationOptions: {
      title: 'MY IRRITANTS',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'SETTINGS',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: 'black',
    headerBackTitle: null,
    headerTitleStyle: {
      fontSize: 12,
      fontWeight: FONT_BOLD,
      letterSpacing: 4,
      fontFamily: FUTURA,
    },
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'transparent',
    },
  },
});

export const ProductStack = StackNavigator({
  SearchProduct: {
    screen: SearchProduct,
    navigationOptions: {
      title: 'SEARCH PRODUCTS',
    },
  },
  Product: {
    screen: Product,
  },
}, {
  navigationOptions: {
    headerTintColor: 'black',
    headerBackTitle: null,
    headerTitleStyle: {
      fontSize: 12,
      fontWeight: FONT_BOLD,
      letterSpacing: 4,
      fontFamily: FUTURA,
    },
    headerStyle: {
      backgroundColor: '#f1f1f1',
      borderBottomColor: 'transparent',
    },
  },
});

export const AddStack = StackNavigator({
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      title: 'ADD PRODUCT',
    },
  },
  Product: {
    screen: Product,
  },
}, {
  navigationOptions: {
    headerTintColor: 'black',
    headerBackTitle: null,
    headerTitleStyle: {
      fontSize: 12,
      fontWeight: FONT_BOLD,
      letterSpacing: 4,
      fontFamily: FUTURA,
    },
    headerStyle: {
      backgroundColor: '#f1f1f1',
      borderBottomColor: 'transparent',
    },
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="sentiment-satisfied" size={30} color={tintColor}/>
    },
  },
  SearchProduct: {
    screen: ProductStack,
    navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor}/>
    },
  },
  AddProduct: {
    screen: AddStack,
    navigationOptions: {
        tabBarLabel: 'Add',
        tabBarIcon: ({ tintColor }) => <Icon name="add" size={30} color={tintColor}/>
    },
  },
  CompareProduct: {
    screen: CompareProduct,
    navigationOptions: {
        tabBarLabel: 'Compare',
        tabBarIcon: ({ tintColor }) => <Icon name="tonality" size={30} color={tintColor}/>
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    showLabel: false,
    style: {
      backgroundColor: 'white',
      borderTopColor: 'transparent',
      opacity: 0.8,
    },
  },
});
