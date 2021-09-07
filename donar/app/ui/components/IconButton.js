import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function IconButton({name, filterFunction, value}) {
  return (
    <Pressable onPress={() => filterFunction(value)}>
      <FontAwesome style={style.icon} name={name} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  icon: {
    fontSize: 40,
    color: '#E72D3B',
  },
});
