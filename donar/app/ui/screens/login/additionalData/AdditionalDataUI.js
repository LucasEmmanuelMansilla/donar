import I18n from '../../../../assets/localization/i18n';
import React from 'react';
import {Pressable, Text, TextInput, View, Modal} from 'react-native';

export default function AdditionalDataUI({
  navigation,
  _visibleModal,
  isVisible,
}) {
  return (
    <View>
      <Text> {I18n.t('LOGIN_WELCOME')} </Text>
      <Text>{I18n.t('REGISTER_ACCOUNT_SUBTITLE')}</Text>
      <TextInput placeholder={I18n.t('PLACEHOLDER_DNI')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_MAIL')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_PASSWORD')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_CONFIRM_PASSWORD')} />

      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View>
          <View style={{marginTop: 100}}>
            <Text>{I18n.t('PLEASE_VALIDATE_CODE')}</Text>
            <Pressable
              onPress={() => _visibleModal()}
              onPressIn={() => navigation()}>
              <Text>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => _visibleModal()}>
        <Text>{I18n.t('REGISTER_ACCOUNT_CREATE_ACCOUNT_BUTTON')}</Text>
      </Pressable>
    </View>
  );
}
