import React from 'react';
import {View, Text} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import I18n from 'i18n-js';

export default function Tatto({handleIndexChange, selectedIndex}) {
  return (
    <View>
      <Text>{I18n.t('TATTO')}</Text>
      <SegmentedControlTab
        values={['Si', 'No']}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
      />
    </View>
  );
}
