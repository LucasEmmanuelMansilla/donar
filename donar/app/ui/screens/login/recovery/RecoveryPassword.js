import React, {Component} from 'react';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import RecoveryPasswordUI from './RecoveryPasswordUI';

export default class RecoveryPassword extends Component {
  navigation = () => {
    this.props.navigation.replace(
      NavigatorConstant.LOGIN_STACK.CODE_VERIFICATION,
    );
  };
  render() {
    return <RecoveryPasswordUI navigation={this.navigation} />;
  }
}
