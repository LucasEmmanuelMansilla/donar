import React from 'react';
import {Text, Pressable} from 'react-native';
import NavigatorConstant from '../../navigation/NavigatorConstant';

export default function TurnComponent(props) {
  return (
    <Pressable
      onPress={() => props.navigation.push(NavigatorConstant.NAVIGATOR.TURN)}>
      <Text>Sacar turno</Text>
    </Pressable>
  );
}
