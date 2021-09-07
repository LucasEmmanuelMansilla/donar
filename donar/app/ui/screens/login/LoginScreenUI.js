import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import I18n from '../../../assets/localization/i18n';

export default function LoginScreenUI({login, register, recoveryPassword}) {
  return (
    <View>
      <Text>{I18n.t('LOGIN_WELCOME')}</Text>
      <Text>{I18n.t('LOGIN_WELCOME_SUBTITLE')}</Text>
      <TextInput placeholder={I18n.t('PLACEHOLDER_MAIL')} />
      <TextInput
        secureTextEntry={true}
        placeholder={I18n.t('PLACEHOLDER_PASSWORD')}
      />
      <Pressable onPress={() => login()}>
        <Text>{I18n.t('LOGIN_BUTTON_ENTER')}</Text>
      </Pressable>
      <Pressable onPress={() => register()}>
        <Text>{I18n.t('LOGIN_BUTTON_CREATE_ACCOUNT')}</Text>
      </Pressable>
      <Pressable onPress={() => recoveryPassword()}>
        <Text>{I18n.t('LOGIN_BUTTON_FORGOT_PASSWORD')}</Text>
      </Pressable>
    </View>
  );
}
