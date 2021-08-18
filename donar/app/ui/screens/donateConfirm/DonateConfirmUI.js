import React from 'react';
import {View, Text, Pressable} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function DonateConfirmUI(props) {
  return (
    <View>
      <Pressable
        onPress={() =>
          props.navigation.push(NavigatorConstant.TURN_STACK.DATA_SCREEN)
        }>
        <Text>Puedo Donar</Text>
      </Pressable>
    </View>
  );
}
