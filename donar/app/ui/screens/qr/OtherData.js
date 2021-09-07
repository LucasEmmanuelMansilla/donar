import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import OtherDataUI from './OtherDataUI';

export default class OtherData extends Component {
  state = {
    preguntas: [
      {id: 1, question: 'Pregunta 1'},
      {id: 2, question: 'Pregunta 2'},
      {id: 3, question: 'Pregunta 3'},
      {id: 4, question: 'Pregunta 4'},
      {id: 5, question: 'Pregunta 5'},
      {id: 6, question: 'Pregunta 6'},
      {id: 7, question: 'Pregunta 7'},
    ],
    isVisible: false

  };

  navigation = () => {
    this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING);
  };

  _modalVisible = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  render() {
    return (
      <OtherDataUI
        preguntas={this.state.preguntas}
        navigation={this.navigation}
        _modalVisible={this._modalVisible}
        isVisible={this.state.isVisible}
      />
    );
  }
}
