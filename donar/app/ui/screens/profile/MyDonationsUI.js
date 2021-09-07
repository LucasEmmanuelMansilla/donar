import React from 'react';
import {View, Text} from 'react-native';

export default function MyDonationsUI({donations}) {
  return (
    <View>
      <Text>Mis donaciones</Text>
      <Text>Nivel de donaciones</Text>
      <Text>Dona x veces más para subir de nivel</Text>
      <Text>Fecha y hora</Text>
      <View>
        {donations.map(({lugar, fecha, hora}) => (
          <View>
            <Text>{lugar}</Text>
            <Text>
              {fecha}, {hora}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
