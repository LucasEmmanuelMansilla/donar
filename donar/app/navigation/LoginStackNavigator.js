import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginScreen from '../ui/screens/login/LoginScreen';
import RegisterScreen from '../ui/screens/login/register/RegisterScreen';
import RecoveryPassword from '../ui/screens/login/recovery/RecoveryPassword';
import AdditionalData from '../ui/screens/login/additionalData/AdditionalData';
import CodeVerification from '../ui/screens/login/codeVerification/CodeVerification';

const Stack = createStackNavigator();

export default class LoginStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}>
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.REGISTER_ADDITIONAL_DATES}
          component={AdditionalData}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.CODE_VERIFICATION}
          component={CodeVerification}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN}
          component={RecoveryPassword}
        />
      </Stack.Navigator>
    );
  }
}
