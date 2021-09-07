import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SettingsScreenUI from './SettingsScreenUI';

export default class SettingsScreen extends Component {
  state = {
    notifications: [
      {
        id: 1,
        notification: 'Notificación 1',
      },
      {
        id: 2,
        notification: 'Notificación 2',
      },
      {
        id: 3,
        notification: 'Notificación 3',
      },
      {
        id: 4,
        notification: 'Notificación 4',
      },
      {
        id: 5,
        notification: 'Notificación 5',
      },
    ],
  };

  render() {
    return <SettingsScreenUI notifications={this.state.notifications} />;
  }
}
