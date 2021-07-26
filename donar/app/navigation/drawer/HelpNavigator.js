import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HelpScreen from '../screens/Menu/HelpScreen';

import {headerOptionStyle} from '../styles/Navigation';
import NavigatorConstant from './NavigatorConstant';
import I18n from '../assets/localization/i18n';

const Stack = createStackNavigator();
export default HelpNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.HELP_SCREEN.HELP}
      screenOptions={headerOptionStyle}>
      <Stack.Screen
        name={NavigatorConstant.HELP_SCREEN.HELP}
        component={HelpScreen}
        options={{title: I18n.t('HELP')}}
      />
    </Stack.Navigator>
  );
};
