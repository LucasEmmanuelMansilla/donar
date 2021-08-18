import React from 'react';
import {View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Toast from 'react-native-toast-message';
import {connect} from 'react-redux';
import {updatePNTokenAction} from '../redux/reducers/authReducer';


class PNHandler extends React.Component {
  constructor(props) {
    super(props);
    this.requestUserPermission();
  }
  componentDidMount() {
    //Push notification handler for background or quit state
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message arrived when app is background!', remoteMessage);
    });

    //Push notification detect when app is open from background state
    messaging().onNotificationOpenedApp((remoteMessage) => {

      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    //Push notification detect when app is open from quit state
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    //Push notification handler for foreground state
    messaging().onMessage(async (remoteMessage) => {
      Toast.show({
        text1: 'Push Notification',
        text2: JSON.stringify(remoteMessage, null, 2),
      });
    });
  }
  //Push notification ask for permission --> only for iOS is need it
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      this.getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  }
  //Push notification get FCM token
  async getFcmToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      this.props.updatePNTokenAction(fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  }

  render() {
    return <View></View>;
  }
}

const mapDispatchToProps = {updatePNTokenAction, fetchDevices};
export default connect(null, mapDispatchToProps)(PNHandler);
