import React from 'react';
import {View, Text, Pressable} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function LandingOneTimeUI(props) {
  return (
    <View>
      <Text>Consultar sobre tipo de sangre</Text>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>Saltear</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.push(
            NavigatorConstant.ONE_TIME_WIZARD_STACK.TIPE_AND_FACTOR,
          )
        }>
        <Text>Acepto</Text>
      </Pressable>
    </View>
  );
}
