import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import I18n from '../../../assets/localization/i18n';
import DropDown from '../../components/DropDown';
import ImportanceDonation from '../../components/ImportanceDonation';
import Tatto from '../../components/Tatto';

export default function ProfileScreenUI({
  _visibleModal,
  isVisible,
  dataUser,
  handleIndexChange,
  selectedIndex,
}) {
  return (
    <ScrollView>
      <ImageBackground
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        }}
      />
      <Text>{I18n.t('MY_PROFILE')}</Text>
      <TextInput editable={false} placeholder={dataUser.nombre} />
      <TextInput editable={false} placeholder={dataUser.birth} />
      <TextInput editable={false} placeholder={dataUser.bloodType} />
      <TextInput
        editable={false}
        placeholder={dataUser.frequentDonate == true ? 'Si' : 'No'}
      />
      <TextInput editable={false} placeholder={dataUser.weight} />
      <TextInput editable={false} placeholder={dataUser.height} />
      <View style={{flexDirection: 'row'}}>
        <DropDown title={I18n.t('DISEASE_TO_DECLARED')} />
      </View>

      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View>
          <View style={{marginTop: 100}}>
            <ImportanceDonation />
            <Pressable onPress={() => _visibleModal()}>
              <Text>{I18n.t('TO_BACK')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row'}}>
        <Tatto
          handleIndexChange={handleIndexChange}
          selectedIndex={selectedIndex}
        />
      </View>
      <Pressable onPress={() => _visibleModal(true)}>
        <Text>{I18n.t('DONATE_FREQUENT')}</Text>
      </Pressable>
    </ScrollView>
  );
}
