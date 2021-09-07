import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import ReadQRUI from './ReadQRUI';

export default class ReadQR extends Component {
  navigation = () => {
    this.props.navigation.push(NavigatorConstant.QR_STACK.PREV_FORM_SCREEN);
  };
  render() {
    return <ReadQRUI navigation={this.navigation} />;
  }
}
