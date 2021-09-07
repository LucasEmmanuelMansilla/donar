import I18n from 'i18n-js';
import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import SwitchComponent from '../../components/SwitchComponent';

export default function SettingsScreenUI({notifications}) {
  return (
    <View>
      <Text>{I18n.t('SETTINGS')}</Text>
      <View>
        {notifications.map(({id, notification}) => (
          <View key={id}>
            <Text>{notification}</Text>
            <SwitchComponent />
          </View>
        ))}
      </View>
      <View>
        <Text>{I18n.t('CHANGE_PASSWORD')}</Text>
        <TextInput placeholder={I18n.t('PLACE_HOLDER_PASSOWORD')} />
        <TextInput placeholder={I18n.t('PLACE_HOLDER_NEW_PASSWORD')} />
        <TextInput placeholder={I18n.t('PLACE_HOLDER_PASSWORD_CONFIRMATION')} />
      </View>
      <Pressable onPress={() => alert('Cambios guardados')}>
        <Text>{I18n.t('SAVE_CHANGES')}</Text>
      </Pressable>
    </View>
  );
}
