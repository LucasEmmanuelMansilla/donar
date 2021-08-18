import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';

export default function MyShiftsUI() {
  return (
    <View>
      <Pressable onPress={() => Alert.alert("Vas a borrar un turno")}>
        <Text>Borrar turno</Text>
      </Pressable>
      <Text>Mis turnos</Text>
    </View>
  );
}
