import I18n from '../../../../assets/localization/i18n';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

export default function CodeVerificationUI({navigation}) {
  return (
    <View>
      <Text>Ingresá tu código de verificación</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput editable={false} placeholder="A" />
        <TextInput maxLength={1} keyboardType="numeric" placeholder="-" />
        <TextInput maxLength={1} keyboardType="numeric" placeholder="-" />
        <TextInput maxLength={1} keyboardType="numeric" placeholder="-" />
      </View>

      <Text>{I18n.t('RESEND_CODE')}</Text>
      <Pressable onPress={() => alert("Reenviamos su código, por favor, vuelva a revisar su casilla")}>
        <Text>{I18n.t('RESEND_CODE_BUTTON')}</Text>
      </Pressable>
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('VERIFY_CODE')}</Text>
      </Pressable>
    </View>
  );
}
