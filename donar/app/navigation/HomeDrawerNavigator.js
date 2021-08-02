import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavigatorConstant from './NavigatorConstant';
import HomeTabNavigator from './HomeTabNavigator';
import { SettingsScreen } from '../ui/screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default class HomeDrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Drawer.Navigator>
          <Drawer.Screen name={NavigatorConstant.NAVIGATOR.LANDING} component={HomeTabNavigator}/>
          <Drawer.Screen name={NavigatorConstant.LANDING_STACK.SETTINGS_SCREEN} component={SettingsScreen}/>
      </Drawer.Navigator>
    );
  }
}
