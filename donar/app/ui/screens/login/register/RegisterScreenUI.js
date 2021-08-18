import I18n from '../../../../assets/localization/i18n';
import React  from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant'

export default function RegisterScreen(props) {
  return (
    <View>
      <TextInput
        name="nombre"
        placeholder={I18n.t('PLACEHOLDER_FIRSTNAME_AND_LASTNAME')}
      />
      <Pressable
        onPress={() =>
          props.navigation.push(
            NavigatorConstant.LOGIN_STACK.REGISTER_ADDITIONAL_DATES,
          )
        }>
        <Text>{I18n.t('REGISTER_ACCOUNT_NEXT')}</Text>
      </Pressable>
    </View>
  );
}
