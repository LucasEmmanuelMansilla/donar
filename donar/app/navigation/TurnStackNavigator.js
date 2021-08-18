import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import DonateConfirm from '../ui/screens/donateConfirm/DonateConfirm';
import DateConfirm from '../ui/screens/donateConfirm/DateConfirm';


const Stack = createStackNavigator();

export default class TurnStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={NavigatorConstant.TURN_STACK.TURN_SCREEN}>
        <Stack.Screen
          name={NavigatorConstant.TURN_STACK.TURN_SCREEN}
          component={DonateConfirm}
        />
        <Stack.Screen
          name={NavigatorConstant.TURN_STACK.DATA_SCREEN}
          component={DateConfirm}
        />
      </Stack.Navigator>
    );
  }
}
