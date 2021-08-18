import React, {Component} from 'react';
import LoginScreenUI from './LoginScreenUI';

export default class LoginScreen extends Component {
  render() {
    return <LoginScreenUI navigation={this.props.navigation} />;
  }
}
