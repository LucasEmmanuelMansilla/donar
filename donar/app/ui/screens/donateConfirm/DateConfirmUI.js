import React, {useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import I18n from '../../../assets/localization/i18n'

export default function DateConfirmUI({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>{I18n.t('DATA')}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Cerrar');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={{marginTop: 100}}>
            <Text>{I18n.t('TURN_CONFIRM')}</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() => navigation()}>
              <Text>{I18n.t('TO_ACCEPT')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text>{I18n.t('TURN_CONFIRM_USER')}</Text>
      </Pressable>
    </View>
  );
}
