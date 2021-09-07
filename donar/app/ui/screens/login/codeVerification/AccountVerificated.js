import {toTime} from 'i18n-js';
import React, {Component} from 'react';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import AccountVerificatedUI from './AccountVerificatedUI';

export default class AccountVerificated extends Component {
  state = {
    timeOut: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.timeOutFunction();
    }, 3000);
  }

  componentDidUpdate() {
    this.navigation();
  }

  navigation = () => {
    if (this.state.timeOut === true) {
      this.props.navigation.replace(NavigatorConstant.NAVIGATOR.ONBOARDING);
    }
  };

  timeOutFunction = () => {
    this.setState({timeOut: true});
  };

  render() {
    return <AccountVerificatedUI />;
  }
}
