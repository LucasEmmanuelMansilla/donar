import React, {useEffect} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
export default ToastConfig = {
    success: ({ text1, props, ...rest }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'pink' }}>
        <Text>{text1}</Text>
        <Text>{props.guid}</Text>
      </View>
    ),
    error: () => {},
    info: () => {},
    any_custom_type: () => {}
  };