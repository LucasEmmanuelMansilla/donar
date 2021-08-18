import React, {Component} from 'react';
import AdditionalDataUI from './AdditionalDataUI';

export default class AdditionalData extends Component {
  render() {
    return <AdditionalDataUI navigation={this.props.navigation} />;
  }
}
