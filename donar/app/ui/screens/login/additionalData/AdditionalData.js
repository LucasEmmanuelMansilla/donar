import React, {Component} from 'react';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import AdditionalDataUI from './AdditionalDataUI';

export default class AdditionalData extends Component {
  state = {
    isVisible: false,
  };

  _visibleModal = () => {
    this.setState({isVisible: !this.state.isVisible});
  };
  navigation = () => {
    this.props.navigation.push(NavigatorConstant.LOGIN_STACK.CODE_VERIFICATION);
  };
  render() {
    return (
      <AdditionalDataUI
        _visibleModal={this._visibleModal}
        isVisible={this.state.isVisible}
        navigation={this.navigation}
      />
    );
  }
}
