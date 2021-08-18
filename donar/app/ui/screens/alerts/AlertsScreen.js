import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import AlertsScreenUI from './AlertsScreenUI';

export default class AlertsScreen extends Component {
  render() {
    return <AlertsScreenUI navigation={this.props.navigation} />;
  }
}
