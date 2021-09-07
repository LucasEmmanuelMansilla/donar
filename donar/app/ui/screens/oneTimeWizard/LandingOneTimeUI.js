import React from 'react';
import {View, Text, Pressable} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import I18n from '../../../assets/localization/i18n'

export default function LandingOneTimeUI(props) {
  return (
    <View>
      <Text>{I18n.t('IMPORTANCE_DONATION_AND_BLOOD_TYPE')}</Text>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>{I18n.t('SAUTE')}</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.push(
            NavigatorConstant.ONE_TIME_WIZARD_STACK.TIPE_AND_FACTOR,
          )
        }>
        <Text>{I18n.t('I_AGREE')}</Text>
      </Pressable>
    </View>
  );
}
