import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import MapComponent from '../../components/MapComponent'

export default function MyShiftsUI({filter, markers, region}) {
  return (
    <View>
      <Text>Mis turnos</Text>
      <Text>Fecha</Text>
      <Pressable onPress={() => alert('Estás por borrar tu turno')}>
        <Text>Borrar</Text>
      </Pressable>
      <Text>Lugar</Text>
      <Text>Estado</Text>
      <Pressable onPress={() => alert('Vas a cambiar un turno')}>
        <Text>Modificar</Text>
      </Pressable>    
      <MapComponent region={region} filter={filter} markers={markers} />
    </View>
  );
}
