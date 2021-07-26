import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileNavigator from './drawer/ProfileNavigator';
import HelpNavigator from './drawer/HelpNavigator';
import LogoutNavigator from './drawer/LogoutNavigator';
import NavigatorConstant from './NavigatorConstant';
import I18n from '../assets/localization/i18n';
import {Colors} from '../styles';
import {
  MenuAlarmaIcon,
  HelpMoreIcon,
  PerfilMoreIcon,
  ExitMoreIcon,
} from '../assets/images';
import LandingScreen from '../ui/Landing/LandingScreen';
import {AlarmNavigator} from './LandingStackNavigator';

const Drawer = createDrawerNavigator();
//TODO: cambiar NAV_ALARM por HOME
export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NavigatorConstant.NAVIGATOR.LANDING}
      drawerPosition="left"
      drawerStyle={{
        backgroundColor: Colors.BACKGROUND_APP,
      }}>
      <Drawer.Screen
        name={NavigatorConstant.NAVIGATOR.LANDING}
        options={{
          title: I18n.t('NAV_ALARM'),
          drawerIcon: ({focused, size}) => (
            <MenuAlarmaIcon width={20} height={20} />
          ),
        }}
        component={AlarmNavigator}
      />

      <Drawer.Screen
        name={NavigatorConstant.NAVIGATOR.USER_PROFILE}
        options={{
          title: I18n.t('USER_PROFILE'),
          drawerIcon: ({focused, size}) => (
            <PerfilMoreIcon width={20} height={20} />
          ),
        }}
        component={ProfileNavigator}
      />

      <Drawer.Screen
        name={NavigatorConstant.NAVIGATOR.HELP}
        options={{
          title: I18n.t('HELP'),
          drawerIcon: ({focused, size}) => (
            <HelpMoreIcon width={20} height={20} />
          ),
        }}
        component={HelpNavigator}
      />

      <Drawer.Screen
        name={NavigatorConstant.NAVIGATOR.LOG_OUT}
        options={{
          title: I18n.t('LOG_OUT'),
          drawerIcon: ({focused, size}) => (
            <ExitMoreIcon width={20} height={20} color={Colors.PRIMARY} />
          ),
        }}
        component={LogoutNavigator}
      />
    </Drawer.Navigator>
  );
};
