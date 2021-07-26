import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/Menu/ProfileScreen';

import {headerOptionStyle} from '../styles/Navigation';
import NavigatorConstant from './NavigatorConstant';
import I18n from '../assets/localization/i18n';

const Stack = createStackNavigator();
export default ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.PROFILE_SCREEN.PROFILE}
      screenOptions={headerOptionStyle}>
      <Stack.Screen
        name={NavigatorConstant.PROFILE_SCREEN.PROFILE}
        component={ProfileScreen}
        options={{title: I18n.t('USER_PROFILE')}}
      />
    </Stack.Navigator>
  );
};
