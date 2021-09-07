import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import LoginScreenUI from './LoginScreenUI';

export default class LoginScreen extends Component {
  login = () => {
    this.props.navigation.push(NavigatorConstant.NAVIGATOR.LANDING);
  };

  register = () => {
    this.props.navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN);
  };

  recoveryPassword = () => {
    this.props.navigation.push(
      NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN,
    );
  };

  render() {
    return (
      <LoginScreenUI
        recoveryPassword={this.recoveryPassword}
        login={this.login}
        register={this.register}
      />
    );
  }
}
