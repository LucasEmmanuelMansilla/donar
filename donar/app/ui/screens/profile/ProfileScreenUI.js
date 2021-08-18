import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import I18n from '../../../assets/localization/i18n';
import ImportanceDonation from '../../components/ImportanceDonation';

export default function ProfileScreenUI() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Text> Mi perfil </Text>
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
            <ImportanceDonation />
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>{I18n.t('TO_BACK')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Ser donador frecuente</Text>
      </Pressable>
    </View>
  );
}
