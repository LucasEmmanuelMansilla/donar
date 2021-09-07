import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import DonateConfirmUI from './DonateConfirmUI';

export default class DonateConfirm extends Component {

  navigation = () => {
    this.props.navigation.push(NavigatorConstant.TURN_STACK.DATA_SCREEN)
  }
  render() {
    return <DonateConfirmUI navigation={this.navigation} />;
  }
}
