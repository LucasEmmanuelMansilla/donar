import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigatorConstant from './NavigatorConstant';
import HomeScreen from '../ui/screens/tabMenu/HomeScreen';
import BloodBank from '../ui/screens/tabMenu/BloodBank';
import Hospitals from '../ui/screens/tabMenu/Hospitals';
import EventsScreen from '../ui/screens/tabMenu/EventsScreen'

const Tab = createBottomTabNavigator();

export default class HomeTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator  
        screenOptions={{
          headerShown: false,
          headerStyle: {
            marginBottom: 50,
            backgroundColor: 'black'
          },
        }}
        initialRouteName={NavigatorConstant.HOME_STACK.HOME_SCREEN}>
        <Tab.Screen
          name={NavigatorConstant.HOME_STACK.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigatorConstant.HOME_STACK.BLOOD_BANK_SCREEN}
          component={BloodBank}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigatorConstant.HOME_STACK.HOSPITAL_SCREEN}
          component={Hospitals}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="times" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigatorConstant.HOME_STACK.EVENTS_SCREEN}
          component={EventsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="times" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
