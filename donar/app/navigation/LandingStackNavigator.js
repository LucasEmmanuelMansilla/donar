import React, {Component} from 'react';
import Landing from '../ui/screens/landing/Landing';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import DropDown from '../ui/components/DropDown';
import ProfileScreen from '../ui/screens/profile/ProfileScreen';
import MyDonations from '../ui/screens/profile/MyDonations';
import MyShifts from '../ui/screens/profile/MyShifts';
import SettingsScreen from '../ui/screens/profile/SettingsScreen';
import LogoutScreen from '../ui/screens/profile/LogoutScreen';
import {Pressable, View, Text} from 'react-native';
import I18n from '../assets/localization/i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default class LandingStackNavigator extends Component {
  profile = () => {
    this.props.navigation.push(NavigatorConstant.PROFILE_STACK.PROFILE_SCREEN);
  };

  myDonations = () => {
    this.props.navigation.push(
      NavigatorConstant.PROFILE_STACK.MY_DONATIONS_SCREEN,
    );
  };

  myShifts = () => {
    this.props.navigation.push(
      NavigatorConstant.PROFILE_STACK.MY_SHIFTS_SCREEN,
    );
  };
  settings = () => {
    this.props.navigation.push(NavigatorConstant.PROFILE_STACK.SETTINGS_SCREEN);
  };
  logout = () => {
    this.props.navigation.push(NavigatorConstant.PROFILE_STACK.LOGOUT_SCREEN);
  };

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          header: () => (
            <View style={{flexDirection: 'row'}}>
              <DropDown
                title={I18n.t('WELCOME')}
                myShifts={this.myShifts}
                profile={this.profile}
                myDonations={this.myDonations}
                settings={this.settings}
                logout={this.logout}
              />
              <Pressable
                onPress={() =>
                  this.props.navigation.replace(
                    NavigatorConstant.PROFILE_STACK.ALERTS_SCREEN,
                  )
                }>
                <Text>
                  <FontAwesome name="bell" />
                </Text>
              </Pressable>
            </View>
          ),
        }}
        initialRouteName={NavigatorConstant.LANDING_STACK.LANDING_STACK}>
        <Stack.Screen
          name={NavigatorConstant.LANDING_STACK.LANDING_STACK}
          component={Landing}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.MY_DONATIONS_SCREEN}
          component={MyDonations}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.MY_SHIFTS_SCREEN}
          component={MyShifts}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.SETTINGS_SCREEN}
          component={SettingsScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.LOGOUT_SCREEN}
          component={LogoutScreen}
        />
      </Stack.Navigator>
    );
  }
}
