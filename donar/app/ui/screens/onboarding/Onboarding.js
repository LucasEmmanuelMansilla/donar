import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import OnboardingUI from './OnboardingUI';

export default class Onboarding extends Component {

  navigation = () => {
    this.props.navigation.replace(NavigatorConstant.NAVIGATOR.ONE_TIME_WIZARD)
  }
  render() {
    return <OnboardingUI navigation={this.navigation} />;
  }
}
