import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import LandingOneTime from '../ui/screens/oneTimeWizard/LandingOneTime';
import TipeAndFactor from '../ui/screens/oneTimeWizard/TipeAndFactor';

const Stack = createStackNavigator();

export default class OneTimeStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={
          NavigatorConstant.ONE_TIME_WIZARD_STACK.ONE_TIME_SCREEN
        }>
        <Stack.Screen
          name={NavigatorConstant.ONE_TIME_WIZARD_STACK.ONE_TIME_SCREEN}
          component={LandingOneTime}
        />
        <Stack.Screen
          name={NavigatorConstant.ONE_TIME_WIZARD_STACK.TIPE_AND_FACTOR}
          component={TipeAndFactor}
        />
      </Stack.Navigator>
    );
  }
}
