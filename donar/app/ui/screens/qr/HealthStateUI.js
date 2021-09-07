import React from 'react';
import {View, Text, Pressable, Switch, TextInput} from 'react-native';
import I18n from 'i18n-js';
import DropDown from '../../components/DropDown';
import QrHeader from '../../components/QrHeader';
import Tatto from '../../components/Tatto';

export default function HealthStateUI({
  isEnabled,
  setIsEnabled,
  navigation,
  handleIndexChange,
  selectedIndex,
}) {
  return (
    <View>
      <QrHeader subTitle={I18n.t('HEALTH_STATE')} />
      <View style={{flexDirection: 'row'}}>
        <DropDown title={I18n.t('DISEASE_TO_DECLARED')} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Dato a completar</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? 'red' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled()}
          value={isEnabled}
        />
      </View>
      <TextInput placeholder="Dato a completar" />
      <View style={{flexDirection: 'row'}}>
        <Tatto
          handleIndexChange={handleIndexChange}
          selectedIndex={selectedIndex}
        />
      </View>

      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('NEXT')}</Text>
      </Pressable>
    </View>
  );
}
