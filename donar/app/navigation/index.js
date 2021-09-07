import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import OneTimeStackNavigator from './OneTimeStackNavigator';
import AlertsScreen from '../ui/screens/alerts/AlertsScreen';
import LandingStackNavigator from './LandingStackNavigator';
import TurnStackNavigator from './TurnStackNavigator';
import QRStackNavigator from './QRStackNavigator';


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
            component={LandingStackNavigator}
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
          <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.TURN}
            component={TurnStackNavigator}
          />
          {/* <Stack.Screen
            name={NavigatorConstant.NAVIGATOR.QR}
            component={QRStackNavigator}
          /> */}

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
