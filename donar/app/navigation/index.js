import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import Drawer from './Drawer';
import StartScreen from '../ui/Start/StartScreen';
import LoginStackNavigator from './LoginStackNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigatorConstant.NAVIGATOR.START}
        headerMode="none">
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.START}
          component={StartScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.LOGIN}
          component={LoginStackNavigator}
        />
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.LANDING}
          component={Drawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
