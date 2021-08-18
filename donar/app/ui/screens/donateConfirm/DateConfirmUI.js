import React, {useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function DateConfirmUI(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>Fecha y hora</Text>
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
            <Text>Turno Confirmado</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              onPressIn={() =>
                props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING)
              }>
              <Text>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text>Confirmar Turno</Text>
      </Pressable>
    </View>
  );
}
