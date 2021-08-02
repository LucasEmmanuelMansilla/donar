import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigatorConstant from './NavigatorConstant';
//import {HomeScreen} from '../screens/HomeScreen';
//import {ProfileScreen} from '../ui/screens/ProfileScreen';
//import LogoutScreen from '../screens/LogoutScreen';

const Tab = createBottomTabNavigator();

export default class HomeTabNavigator extends Component {

  render() {
    return (
        <Tab.Navigator 
        initialRouteName={NavigatorConstant.NAVIGATOR.HOME}>
            {/* <Tab.Screen name="HOME" component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                            <FontAwesome name="home" color={color} size={size} />
                            )}}/> */}
            {/* <Tab.Screen name="PROFILE" component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                            <FontAwesome name="user" color={color} size={size} />
                            )}}/>
            <Tab.Screen name="LOGOUT" component={LogoutScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                            <FontAwesome name="times" color={color} size={size} />
                            )}}/> */}
        </Tab.Navigator>
    );
  }
}

