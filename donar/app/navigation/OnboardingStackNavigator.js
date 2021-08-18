import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import Onboarding from '../ui/screens/onboarding/Onboarding';

const Stack = createStackNavigator();
export default class OnboardingStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={NavigatorConstant.ONBOARDING_STACK.ONBOARDING_SCREEN}>
        <Stack.Screen
          name={NavigatorConstant.ONBOARDING_STACK.ONBOARDING_SCREEN}
          component={Onboarding}
        />
      </Stack.Navigator>
    );
  }
}
