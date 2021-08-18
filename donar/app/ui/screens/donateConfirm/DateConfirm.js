import React, {Component} from 'react';
import DateConfirmUI from './DateConfirmUI';

export default class DateConfirm extends Component {
  render() {
    return <DateConfirmUI navigation={this.props.navigation} />;
  }
}
