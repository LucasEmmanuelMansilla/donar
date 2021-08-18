import React, {Component} from 'react';
import {View, Text, TextInput, Pressable, I18nManager} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import I18n from '../../../assets/localization/i18n';

export default function LoginScreenUI(props) {
  return (
    <View>
      <TextInput placeholder={I18n.t('PLACEHOLDER_MAIL')} />
      <Pressable
        onPress={() =>
          props.navigation.push(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>{I18n.t('TO_ACCEPT')}</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_SCREEN)
        }>
        <Text>{I18n.t('LOGIN_BUTTON_CREATE_ACCOUNT')}</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.push(
            NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_SCREEN,
          )
        }>
        <Text>{I18n.t('LOGIN_BUTTON_FORGOT_PASSWORD')}</Text>
      </Pressable>
    </View>
  );
}
