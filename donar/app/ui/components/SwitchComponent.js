import React, {useState} from 'react';
import {Switch} from 'react-native';

export default function SwitchComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? 'red' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => setIsEnabled(!isEnabled)}
      value={isEnabled}
    />
  );
}
