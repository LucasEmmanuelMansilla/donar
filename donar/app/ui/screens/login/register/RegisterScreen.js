import React, {Component} from 'react';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import RegisterScreenUI from './RegisterScreenUI';

export default class RegisterScreen extends Component {
  state = {
    isVisible: false,
  };

  _modalVisible = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  navigation = () => {
    this.props.navigation.push(
      NavigatorConstant.LOGIN_STACK.REGISTER_ADDITIONAL_DATES,
    );
  };
  render() {
    return (
      <RegisterScreenUI
        isVisible={this.state.isVisible}
        _modalVisible={this._modalVisible}
        navigation={this.navigation}
      />
    );
  }
}
