import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import ConfirmTurnUI from './ConfirmTurnUI';

export default class ConfirmTurn extends Component {
  navigation = () => {
    this.props.navigation.push(
      NavigatorConstant.QR_STACK.FORM_VERIFICATE_DATA_SCREEN,
    );
  };

  render() {
    return <ConfirmTurnUI navigation={this.navigation}/>;
  }
}
