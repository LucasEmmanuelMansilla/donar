
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginScreen from '../ui/screens//login/LoginScreen';
//import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default class LoginStackNavigator extends Component {

  render() {
    return (
        <Stack.Navigator 
        headerMode="none"
        initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN}>
            <Stack.Screen name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN} component={LoginScreen} /> 
            {/* <Stack.Screen name={NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN} component={RegisterScreen} /> */}
        </Stack.Navigator>
    );
  }
}
