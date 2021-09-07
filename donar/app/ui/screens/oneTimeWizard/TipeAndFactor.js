import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import TipeAndFactorUI from './TipeAndFactorUI';

export default class TipeAndFactor extends Component {
  state = {
    isVisible: false,
    bloodType: [
      {
        value: 1,
        label: '0+',
      },
      {
        value: 2,
        label: '0-',
      },
      {
        value: 3,
        label: 'A+',
      },
      {
        value: 4,
        label: 'A-',
      },
      {
        value: 5,
        label: 'B+',
      },
      {
        value: 6,
        label: 'B-',
      },
      {
        value: 7,
        label: 'AB+',
      },
      {
        value: 8,
        label: 'AB-',
      },
    ],
    isEnabled: false,
    selected: null,
  };

  _modalVisible = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  setSelected = value => {
    this.setState({selected: value});
  };

  navigation = () => {
    this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING);
  };

  setIsEnabled = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    return (
      <TipeAndFactorUI
        navigation={this.navigation}
        isVisible={this.state.isVisible}
        _modalVisible={this._modalVisible}
        bloodType={this.state.bloodType}
        isEnabled={this.state.isEnabled}
        setIsEnabled={this.setIsEnabled}
        setSelected={this.setSelected}
        selected={this.state.selected}
      />
    );
  }
}
