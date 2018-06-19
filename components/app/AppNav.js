import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import ListScreen from './day/ListScreen';

const StackNav = StackNavigator({
  List: {
    screen: ListScreen
  },
  Home: { 
    screen: HomeScreen
  },


}
);

export default StackNav;