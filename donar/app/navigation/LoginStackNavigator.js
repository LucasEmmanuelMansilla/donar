import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../ui/Login/RegisterScreen';
import LoginScreen from '../ui/Login/LoginScreen';
import ValidationMailScreen from '../ui/Login/ValidationMailScreen';
import PasswordRecoveryScreen from '../ui/Login/PasswordRecoveryScreen';

import {headerOptionStyle} from '../styles/Navigation';
import NavigatorConstant from './NavigatorConstant';
import I18n from '../assets/localization/i18n';

const Stack = createStackNavigator();
export default LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.LOGIN_SCREEN.LOGIN}
      screenOptions={headerOptionStyle}>
      <Stack.Screen
        name={NavigatorConstant.LOGIN_SCREEN.LOGIN}
        component={LoginScreen}
        options={({title: I18n.t('ENTER')}, {animationEnabled: false})}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_SCREEN.REGISTER}
        component={RegisterScreen}
        options={{title: I18n.t('NEW_ACCOUNT')}}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_SCREEN.VERIFICATION_MAIL}
        component={ValidationMailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_SCREEN.PASSWORD_RECOVERY}
        component={PasswordRecoveryScreen}
        options={{title: I18n.t('LOGIN_BUTTON_FORGOT_PASSWORD')}}
      />


    </Stack.Navigator>
  );
};
