import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import HealthStateUI from './HealthStateUI';

export default class HealthState extends Component {
  state = {
    isEnabled: false,
    selectedIndex: 0,
  };

  setIsEnabled = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  navigation = () => {
    this.props.navigation.push(
      NavigatorConstant.QR_STACK.FORM_OTHER_DATA_SCREEN,
    );
  };

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };
  render() {
    return (
      <HealthStateUI
        isEnabled={this.state.isEnabled}
        setIsEnabled={this.setIsEnabled}
        navigation={this.navigation}
        selectedIndex={this.state.selectedIndex}
        handleIndexChange={this.handleIndexChange}
      />
    );
  }
}
