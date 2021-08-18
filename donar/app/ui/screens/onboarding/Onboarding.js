import React, {Component} from 'react';
import OnboardingUI from './OnboardingUI';

export default class Onboarding extends Component {
  render() {
    return <OnboardingUI navigation={this.props.navigation} />;
  }
}
