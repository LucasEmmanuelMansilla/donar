import I18n from '../../../../assets/localization/i18n';
import React, {useState} from 'react';
import {View, Text, Pressable, TextInput, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function RegisterScreen({navigation, isVisible, _modalVisible}) {
  const [date, setDate] = useState(new Date());

  const age = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const fecha = day + '/' + month + '/' + age;
  return (
    <View>
      <Text>{I18n.t('REGISTER_ACCOUNT_TITLE')}</Text>
      <TextInput
        name="nombre"
        placeholder={I18n.t('PLACEHOLDER_FIRSTNAME_AND_LASTNAME')}
      />

      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <DatePicker
          mode="date"
          locale="es"
          androidVariant="nativeAndroid"
          date={date}
          onDateChange={setDate}
        />
        <Pressable onPress={() => _modalVisible()}>
          <Text>{I18n.t('TO_ACCEPT')}</Text>
        </Pressable>
      </Modal>
      <Pressable onPress={() => _modalVisible()}>
        <TextInput
          editable={false}
          onPress={() => _modalVisible()}
          value={fecha}
          placeholder={I18n.t('PLACEHOLDER_DATE_OF_BIRTH')}
        />
      </Pressable>
      <Pressable onPress={() => navigation()}>
        <Text>{I18n.t('REGISTER_ACCOUNT_NEXT')}</Text>
      </Pressable>
    </View>
  );
}
