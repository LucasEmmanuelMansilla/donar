import React from 'react';
import {View, Text, Pressable} from 'react-native';
import TurnComponent from '../../components/TurnComponent';

export default function EventsScreenUI(props) {
  return (
    <View>
      <Text> Eventos </Text>
      <TurnComponent navigation={props.navigation} />
    </View>
  );
}
