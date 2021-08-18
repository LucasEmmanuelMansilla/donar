import React, {Component} from 'react';
import RegisterScreenUI from './RegisterScreenUI';

export default class RegisterScreen extends Component {
  render() {
    return <RegisterScreenUI navigation={this.props.navigation} />;
  }
}
