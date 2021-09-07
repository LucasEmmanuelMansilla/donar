import React from 'react';
import {View, Text, Pressable} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import I18n from '../../../assets/localization/i18n'

export default function AlertsScreenUI(props) {
  return (
    <View>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>{I18n.t('TO_BACK')}</Text>
      </Pressable>
      <Text> {I18n.t('ALERT')}</Text>
    </View>
  );
}
