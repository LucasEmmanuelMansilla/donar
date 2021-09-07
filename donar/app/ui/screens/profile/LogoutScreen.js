import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default class LogoutScreen extends Component {
  componentDidMount() {
    this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN);
  }

  render() {
    return (
      <View>
        <Text> LogoutScreen </Text>
      </View>
    );
  }
}
