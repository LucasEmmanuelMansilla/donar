import I18n from '../../../../assets/localization/i18n';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

export default function CodeVerificationUI(props) {
  return (
    <View>
      <Text>{I18n.t('RESEND_CODE')}</Text>
      <Pressable>
        <Text>{I18n.t('RESEND_CODE_BUTTON')}</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.ONBOARDING)
        }>
        <Text>{I18n.t('VERIFY_CODE')}</Text>
      </Pressable>
    </View>
  );
}
