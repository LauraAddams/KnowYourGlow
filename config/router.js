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
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: 'SOLO',
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      title: 'SODO',
    },
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      title: 'DODO',
    },
  },
  CompareProduct: {
    screen: CompareProduct,
    navigationOptions: {
      title: 'ROLO',
    },
  },
  MyRoutine: {
    screen: MyRoutine,
    navigationOptions: {
      title: 'POPO',
    },
  },
  TaggedIngredients: {
    screen: TaggedIngredients,
    navigationOptions: {
      title: 'NONO',
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
