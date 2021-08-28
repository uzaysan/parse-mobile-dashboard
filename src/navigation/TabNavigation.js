import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import BrowserScreen from '../screens/BrowserScreen';
import ApiScreen from '../screens/ApiScreen';
// BottomBar
import BottomBar from '../components/BottomBar';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="BrowserScreen" component={BrowserScreen} />
      <Tab.Screen name="ApiScreen" component={ApiScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
