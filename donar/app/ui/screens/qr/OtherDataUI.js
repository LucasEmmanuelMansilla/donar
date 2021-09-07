import React from 'react';
import {View, Text, Pressable, TextInput, Modal} from 'react-native';
import I18n from '../../../assets/localization/i18n';

export default function OtherDataUI({
  navigation,
  preguntas,
  _modalVisible,
  isVisible,
}) {
  return (
    <View>
      <Text>Otros datos</Text>
      {preguntas.map(({id, question}) => (
        <TextInput key={id} placeholder={question} />
      ))}
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
            <Text>{I18n.t('FINISH_QR')}</Text>
            <Pressable onPress={() => navigation()}>
              <Text>{I18n.t('TO_ACCEPT')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => _modalVisible()}>
        <Text>{I18n.t('SAVE')}</Text>
      </Pressable>
    </View>
  );
}
