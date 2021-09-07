import React from 'react';
import {View, Text} from 'react-native';
import I18n from '../../assets/localization/i18n'

export default function QrHeader({subTitle}) {
  return (
    <View>
      <Text>{I18n.t('PLEASE_COMPLETE_FORM')}</Text>
      <Text>{subTitle}</Text>
      <Text>{I18n.t('VERIFICATE_DATA')}</Text>
    </View>
  );
}
