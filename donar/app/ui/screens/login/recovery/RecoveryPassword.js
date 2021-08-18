import React, {Component} from 'react';
import RecoveryPasswordUI from './RecoveryPasswordUI';

export default class RecoveryPassword extends Component {
  render() {
    return <RecoveryPasswordUI navigation={this.props.navigation} />;
  }
}
