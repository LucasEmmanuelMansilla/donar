import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigatorConstant from './NavigatorConstant';
import ReadQR from '../ui/screens/qr/ReadQR';
import ConfirmTurn from '../ui/screens/qr/ConfirmTurn';
import VerificateData from '../ui/screens/qr/VerificateData';
import HealthState from '../ui/screens/qr/HealthState';
import OtherData from '../ui/screens/qr/OtherData';

const Stack = createStackNavigator();

export default class QRStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={NavigatorConstant.QR_STACK.QR_SCREEN}>
        <Stack.Screen
          name={NavigatorConstant.QR_STACK.QR_SCREEN}
          component={ReadQR}
        />
        <Stack.Screen
          name={NavigatorConstant.QR_STACK.PREV_FORM_SCREEN}
          component={ConfirmTurn}
        />
        <Stack.Screen
          name={NavigatorConstant.QR_STACK.FORM_VERIFICATE_DATA_SCREEN}
          component={VerificateData}
        />
        <Stack.Screen
          name={NavigatorConstant.QR_STACK.FORM_HEALTH_STATE_SCREEN}
          component={HealthState}
        />
        <Stack.Screen
          name={NavigatorConstant.QR_STACK.FORM_OTHER_DATA_SCREEN}
          component={OtherData}
        />
      </Stack.Navigator>
    );
  }
}
