import React, {Component} from 'react';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import CodeVerificationUI from './CodeVerificationUI';

export default class CodeVerification extends Component {
  navigation = () => {
    this.props.navigation.push(
      NavigatorConstant.LOGIN_STACK.ACCOUNT_VERIFICATED_SCREEN,
    );
  };
  render() {
    return <CodeVerificationUI navigation={this.navigation} />;
  }
}
