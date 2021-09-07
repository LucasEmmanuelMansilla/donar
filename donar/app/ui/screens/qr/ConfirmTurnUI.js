import React from 'react';
import {View, Text, Pressable} from 'react-native';
import I18n from '../../../assets/localization/i18n';

export default function ConfirmTurnUI({navigation}) {
  return (
    <View>
      <Text>{I18n.t('CAME_THE_DAY')}</Text>
      <Text>{I18n.t('VERY_WELL')} Maxi</Text>
      <Text>{I18n.t('QR_NURSE')}</Text>
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('TO_ACCEPT')}</Text>
      </Pressable>
    </View>
  );
}
