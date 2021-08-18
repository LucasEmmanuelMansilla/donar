import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import OneTimeStackNavigator from './OneTimeStackNavigator';
import AlertsScreen from '../ui/screens/alerts/AlertsScreen';

const Stack = createStackNavigator();

export default class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN}>
          <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.LOGIN}
            component={LoginStackNavigator}
          />
          <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.LANDING}
            component={HomeDrawerNavigator}
          />
          <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.ONBOARDING}
            component={OnboardingStackNavigator}
          />
          <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.ONE_TIME_WIZARD}
            component={OneTimeStackNavigator}
          />
          <Stack.Screen
            name={NavigatorConstant.PROFILE_STACK.ALERTS_SCREEN}
            component={AlertsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
