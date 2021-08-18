import React from 'react';
import {View, Text, Pressable} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function AlertsScreenUI(props) {
  return (
    <View>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>Atrás</Text>
      </Pressable>
      <Text> Alertas </Text>
    </View>
  );
}
