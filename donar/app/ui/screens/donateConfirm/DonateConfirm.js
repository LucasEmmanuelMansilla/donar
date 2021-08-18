import React, {Component} from 'react';
import DonateConfirmUI from './DonateConfirmUI';

export default class DonateConfirm extends Component {
  render() {
    return <DonateConfirmUI navigation={this.props.navigation} />;
  }
}
