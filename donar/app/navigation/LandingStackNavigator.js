import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import I18n from '../assets/localization/i18n';
import {headerOptionStyle} from '../styles/Navigation';
import NavigatorConstant from './NavigatorConstant';
import LandingScreen from '../ui/Landing/LandingScreen';
//TODO: esto tiene que ser un TabStackNavigator con 4 tabs
const Stack = createStackNavigator();
const AlarmNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerOptionStyle}>
      <Stack.Screen
        name={NavigatorConstant.LANDING_SCREEN.ALARM}
        component={LandingScreen}
        options={{title: I18n.t('NAV_ALARM')}}
      />
    </Stack.Navigator>
  );
};
export {AlarmNavigator};
