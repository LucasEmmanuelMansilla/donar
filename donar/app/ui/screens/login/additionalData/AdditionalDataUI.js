import I18n from '../../../../assets/localization/i18n';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, View, Modal} from 'react-native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

export default function AdditionalDataUI(props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text> {I18n.t('LOGIN_WELCOME')} </Text>
      <Text>{I18n.t('REGISTER_ACCOUNT_SUBTITLE')}</Text>
      <TextInput placeholder={I18n.t('PLACEHOLDER_DNI')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_MAIL')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_PASSWORD')} />
      <TextInput placeholder={I18n.t('PLACEHOLDER_CONFIRM_PASSWORD')} />

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
              onPressIn={() =>
                props.navigation.push(
                  NavigatorConstant.LOGIN_STACK.CODE_VERIFICATION,
                )
              }>
              <Text>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>{I18n.t('REGISTER_ACCOUNT_CREATE_ACCOUNT_BUTTON')}</Text>
      </Pressable>
    </View>
  );
}
