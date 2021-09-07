import React from 'react';
import {View, Text, Pressable} from 'react-native';
import I18n from '../../../assets/localization/i18n';

export default function DonateConfirmUI({navigation}) {
  return (
    <View>
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('CAN_DONATE')}</Text>
      </Pressable>
    </View>
  );
}
