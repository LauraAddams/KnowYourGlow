import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LogIn from '../screens/LogIn';
import Landing from '../screens/Landing';
import SearchProduct from '../screens/SearchProduct';
import Product from '../screens/Product';
import AddProduct from '../screens/AddProduct';
import CompareProduct from '../screens/CompareProduct';
import TaggedIngredients from '../screens/TaggedIngredients';
import Settings from '../screens/Settings';

import { BG_COLOR, BLACK } from './styles';
import text from './text';

export const HomeStack = StackNavigator({
  Home: {
    screen: Landing,
    navigationOptions: {
      title: 'MY ROUTINE',
      headerLeft: null,
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
    headerTintColor: BLACK,
    headerBackTitle: null,
    headerTitleStyle: text.navHeader,
    headerStyle: {
      backgroundColor: BG_COLOR,
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
    headerTintColor: BLACK,
    headerBackTitle: null,
    headerTitleStyle: text.navHeader,
    headerStyle: {
      backgroundColor: BG_COLOR,
      borderBottomColor: 'transparent',
    },
  },
});

export const AddStack = StackNavigator({
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      title: 'ADD A NEW PRODUCT',
    },
  },
  Product: {
    screen: Product,
  },
}, {
  navigationOptions: {
    headerTintColor: BLACK,
    headerBackTitle: null,
    headerTitleStyle: text.navHeader,
    headerStyle: {
      backgroundColor: BG_COLOR,
      borderBottomColor: 'transparent',
    },
  },
});

export const CompareStack = StackNavigator({
  CompareProduct: {
    screen: CompareProduct,
    navigationOptions: {
      title: 'COMPARE PRODUCTS',
    },
  },
}, {
  navigationOptions: {
    headerTintColor: BLACK,
    headerBackTitle: null,
    headerTitleStyle: text.navHeader,
    headerStyle: {
      backgroundColor: BG_COLOR,
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
      tabBarIcon: ({ tintColor }) => <Icon name="add" size={34} color={tintColor} />
    },
  },
  CompareProduct: {
    screen: CompareStack,
    navigationOptions: {
      tabBarLabel: 'Compare',
      tabBarIcon: ({ tintColor }) => (<Image source={require('../assets/compare.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />)
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: BLACK,
    showLabel: false,
    style: {
      backgroundColor: BG_COLOR,
      borderTopColor: 'transparent',
    },
  },
});

export const RootStack = StackNavigator({
  LogIn: {
    screen: LogIn,
  },
  Tabs: {
    screen: Tabs,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 37,
    height: 26,
    resizeMode: 'contain',
  },
});
