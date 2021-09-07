import React, {useState} from 'react';
import {View, Text, Pressable, Modal, Switch} from 'react-native';
import ImportanceDonation from '../../components/ImportanceDonation';
import I18n from '../../../assets/localization/i18n';
import RadioButton from 'react-native-simple-radio-button-input';

export default function TipeAndFactorUI({
  navigation,
  isVisible,
  _modalVisible,
  bloodType,
  isEnabled,
  setIsEnabled,
  setSelected,
  selected,
}) {
  return (
    <View>
      <Text>{I18n.t('FACTOR_AND_BLOOD_TYPE')}</Text>
      <View>
        {bloodType.map(blood => (
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap'}}
            key={blood.value}>
            <RadioButton
              color={'blue'}
              selected={selected == blood.value}
              onPress={() => {
                setSelected(blood.value);
              }}
            />
            <Text style={{marginLeft: 7}}> {blood.label} </Text>
          </View>
        ))}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{I18n.t('QUESTION_DONATE_FREQUENT')}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? 'red' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled()}
          value={isEnabled}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Cerrar');
          _modalVisible();
        }}>
        <View>
          <View style={{marginTop: 100}}>
            <ImportanceDonation />
            <Pressable onPress={() => _modalVisible()}>
              <Text>{I18n.t('TO_BACK')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => _modalVisible()}>
        <Text>{I18n.t('DONATE_FREQUENT')}</Text>
      </Pressable>
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('SAVE')}</Text>
      </Pressable>
    </View>
  );
}
