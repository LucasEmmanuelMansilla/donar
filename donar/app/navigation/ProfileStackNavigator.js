import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ProfileScreen from '../ui/screens/profile/ProfileScreen';
import {Pressable, Text} from 'react-native';


const Stack = createStackNavigator();

export default class ProfileStackNavigator extends Component {
 
  render() { 
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => 
            <Pressable
              onPress={() =>
                this.props.navigation.replace(
                  NavigatorConstant.NAVIGATOR.LANDING,
                )
              }>
              <Text>Atrás</Text>
            </Pressable>

        }}
        initialRouteName={NavigatorConstant.PROFILE_STACK.PROFILE_SCREEN}>
        <Stack.Screen
          options={{
            title: null,
          }}
          name={NavigatorConstant.PROFILE_STACK.PROFILE_SCREEN}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    );
  }
}
