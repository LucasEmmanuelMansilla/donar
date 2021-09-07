import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import DateConfirmUI from './DateConfirmUI';

export default class DateConfirm extends Component {

  navigation = () =>{
    this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
  }
  render() {
    return <DateConfirmUI navigation={this.navigation} />;
  }
}
