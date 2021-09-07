import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import I18n from 'i18n-js';
import QrHeader from '../../components/QrHeader';

export default function VerificateDataUI({navigation, user}) {
  return (
    <View>
      <QrHeader subTitle={I18n.t('FIRST_DATA')} />
      <TextInput placeholder={user.name} />
      <TextInput placeholder={user.dateOfBirth} />
      <TextInput placeholder={user.bloodType} />
      <TextInput placeholder={user.donateFrecuent} />
      <TextInput placeholder={user.peso.toString()} />
      <TextInput placeholder={user.altura.toString()} />
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('NEXT')}</Text>
      </Pressable>
    </View>
  );
}
