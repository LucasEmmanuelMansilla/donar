import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ImportanceDonation() {
  return (
    <View style={style.container}>
      <Text>Título</Text>
      <Text>Cuerpo</Text>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
