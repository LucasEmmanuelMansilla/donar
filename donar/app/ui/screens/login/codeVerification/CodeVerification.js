import React, {Component} from 'react';
import CodeVerificationUI from './CodeVerificationUI';

export default class CodeVerification extends Component {
  render() {
    return <CodeVerificationUI navigation={this.props.navigation} />;
  }
}
