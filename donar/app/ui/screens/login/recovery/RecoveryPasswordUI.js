import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, TextInput} from 'react-native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
import I18n from '../../../../assets/localization/i18n'

export default function RecoveryPasswordUI(props) {
  
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
            <Text>
              {I18n.t('PLEASE_VALIDATE_CODE')}
            </Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() =>
                props.navigation.push(NavigatorConstant.NAVIGATOR.HOME)
              }>
              <Text>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Enviar</Text>
      </Pressable>
    </View>
  );
}
