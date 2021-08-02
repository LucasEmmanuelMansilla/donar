import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import  LoginStackNavigator from './LoginStackNavigator';
import HomeDrawerNavigator from './HomeDrawerNavigator';

const Stack = createStackNavigator();

export default class RootNavigator extends Component {

  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator
        headerMode="none"
        initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN}>
            <Stack.Screen name={NavigatorConstant.NAVIGATOR.LOGIN} component={LoginStackNavigator} />
            <Stack.Screen name={NavigatorConstant.NAVIGATOR.HOME} component={HomeDrawerNavigator} />
        </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
