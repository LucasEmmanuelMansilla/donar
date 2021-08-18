import React, {useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import ImportanceDonation from '../../components/ImportanceDonation';
import I18n from '../../../assets/localization/i18n';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function TipeAndFactorUI(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Text>Tipo y factor de sangre</Text>
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
        <Text>Ser donante frecuente</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
        }>
        <Text>Guardar</Text>
      </Pressable>
    </View>
  );
}
