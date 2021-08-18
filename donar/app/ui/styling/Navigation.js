import React from 'react';
import {Platform} from 'react-native';
import {BackHeaderButton} from '../components/UI';
import {Colors} from '../styles';
import {FONT_FAMILY_MEDIUM, FONT_WEIGHT_BOLD} from './typography';

export const headerOptionStyle = ({navigation}) => ({
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
    shadowColor: 'transparent',
  },
  headerTitleStyle: {
    alignSelf: 'center',
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  headerTitleAlign: 'center',
  headerTintColor: Colors.WHITE,
  headerBackImage: () => <BackHeaderButton />,
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
  },
});
