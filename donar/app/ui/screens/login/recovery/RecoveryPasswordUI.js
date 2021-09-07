import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, TextInput} from 'react-native';
import I18n from '../../../../assets/localization/i18n';

export default function RecoveryPasswordUI({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TextInput placeholder={I18n.t('RECOVERY_PASSWORD_EMAIL')} />
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
            <Text>{I18n.t('PLEASE_VALIDATE_CODE')}</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() => navigation()}>
              <Text>{I18n.t('TO_ACCEPT')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>{I18n.t('TO_SEND')}</Text>
      </Pressable>
    </View>
  );
}
