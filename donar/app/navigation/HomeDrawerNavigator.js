import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigatorConstant from './NavigatorConstant';
import HomeTabNavigator from './HomeTabNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import MyShifts from '../ui/screens/profile/MyShifts';
import {Pressable, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import MyDonations from '../ui/screens/profile/MyDonations';
import SettingsScreen from '../ui/screens/profile/SettingsScreen';
import LogoutScreen from '../ui/screens/profile/LogoutScreen';
import TurnStackNavigator from './TurnStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TurnStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={NavigatorConstant.NAVIGATOR.HOME}>
    <Stack.Screen
      name={NavigatorConstant.NAVIGATOR.HOME}
      component={HomeTabNavigator}
    />
    <Stack.Screen
      options={{
        drawerLabel: () => null,
        title: null,
      }}
      name={NavigatorConstant.NAVIGATOR.TURN}
      component={TurnStackNavigator}
    />
  </Stack.Navigator>
);

export default class HomeDrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerLeft: () => (
            <View>
              <Text>FOTO DE PERFIL</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Pressable
                onPress={() =>
                  this.props.navigation.push(
                    NavigatorConstant.PROFILE_STACK.ALERTS_SCREEN,
                  )
                }>
                <Text>Icono</Text>
              </Pressable>
            </View>
          ),
          headerTitle: () => (
            <Pressable
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <Text>HOLA DESCONOCIDO</Text>
            </Pressable>
          ),
        }}
        initialRouteName={NavigatorConstant.NAVIGATOR.HOME}>
        <Drawer.Screen
          options={{
            drawerLabel: () => null,
            title: null,
          }}
          name={NavigatorConstant.NAVIGATOR.HOME}
          children={TurnStack}
        />
        <Drawer.Screen
          options={{
            title: 'Mis datos',
          }}
          name={NavigatorConstant.NAVIGATOR.PROFILE}
          component={ProfileStackNavigator}
        />
        <Drawer.Screen
          options={{
            title: 'Mis donaciones',
          }}
          name={NavigatorConstant.PROFILE_STACK.MY_DONATIONS_SCREEN}
          component={MyDonations}
        />
        <Drawer.Screen
          options={{
            title: 'Mi Turno',
          }}
          name={NavigatorConstant.PROFILE_STACK.MY_SHIFTS_SCREEN}
          component={MyShifts}
        />
        <Drawer.Screen
          options={{
            title: 'Configuración',
          }}
          name={NavigatorConstant.PROFILE_STACK.SETTINGS_SCREEN}
          component={SettingsScreen}
        />
        <Drawer.Screen
          options={{
            title: 'Salir',
          }}
          name={NavigatorConstant.PROFILE_STACK.LOGOUT_SCREEN}
          component={LogoutScreen}
        />
      </Drawer.Navigator>
    );
  }
}
