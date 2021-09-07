import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import VerificateDataUI from './VerificateDataUI';

export default class VerificateData extends Component {
  state = {
    user: {
      name: 'Juan Perez',
      dateOfBirth: '10/02/1993',
      bloodType: 'A+',
      donateFrecuent: 'Si',
      peso: 50,
      altura: 1.65,
    },
  };

  navigation = () => {
    this.props.navigation.push(
      NavigatorConstant.QR_STACK.FORM_HEALTH_STATE_SCREEN,
    );
  };
  render() {
    return (
      <VerificateDataUI user={this.state.user} navigation={this.navigation} />
    );
  }
}
