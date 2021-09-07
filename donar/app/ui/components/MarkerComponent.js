import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Callout, Marker} from 'react-native-maps';
import I18n from '../../assets/localization/i18n';

export default function MarkerComponent({coordinates, id, turnPush}) {
  return (
    <Marker key={id} coordinate={coordinates}>
      <Callout onPress={() => turnPush()}>
        <TouchableWithoutFeedback>
          <View>
            <Text>{I18n.t('PLEASE_VALIDATE_CODE')}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Callout>
    </Marker>
  );
}
