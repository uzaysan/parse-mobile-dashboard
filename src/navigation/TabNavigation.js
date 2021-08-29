import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import BrowserScreen from '../screens/BrowserScreen';
import ApiScreen from '../screens/ApiScreen';
import WebhooksScreen from '../screens/WebooksScreen';
import LogsScreen from '../screens/LogsScreen';
import ConfigScreen from '../screens/ConfigScreen';
// BottomBar
import BottomBar from '../components/BottomBar';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="DatabaseScreen" component={BrowserScreen} />
      <Tab.Screen name="WebhooksScreen" component={WebhooksScreen} />
      <Tab.Screen name="LogsScreen" component={LogsScreen} />
      <Tab.Screen name="ConfigScreen" component={ConfigScreen} />
      <Tab.Screen name="ApiScreen" component={ApiScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
