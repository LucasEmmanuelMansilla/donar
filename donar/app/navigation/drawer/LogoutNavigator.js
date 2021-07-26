import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogoutScreen from '../ui/Menu/LogoutScreen';


import {headerOptionStyle} from '../styles/Navigation';
import NavigatorConstant from '../NavigatorConstant';
import I18n from '../../assets/localization/i18n';

const Stack = createStackNavigator();
export default LogoutNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.LOG_OUT_SCREEN.LOG_OUT}
      screenOptions={headerOptionStyle}>
      <Stack.Screen
        name={NavigatorConstant.LOG_OUT_SCREEN.LOG_OUT}
        component={LogoutScreen}
        options={{title: I18n.t('LOG_OUT')}}
      />
    </Stack.Navigator>
  );
};
