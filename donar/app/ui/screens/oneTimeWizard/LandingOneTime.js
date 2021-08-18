import React, {Component} from 'react';
import LandingOneTimeUI from './LandingOneTimeUI';

export default class LandingOneTime extends Component {
  render() {
    return <LandingOneTimeUI navigation={this.props.navigation} />;
  }
}
