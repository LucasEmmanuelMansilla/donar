import React, {useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function DropDown({
  profile,
  myDonations,
  myShifts,
  settings,
  logout,
  title
}) {
  const menu = useRef();

  const showMenu = () => menu.current.show();

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Menu
        ref={menu}
        button={
          <Pressable onPress={showMenu} style={{flexDirection: 'row'}}>
            <Text>{title}</Text>
            <FontAwesome name="chevron-down" />
          </Pressable>
        }>
        <MenuItem onPress={profile}>
          <Text>Mis datos</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={myDonations}>
          <Text>Mis donaciones</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={myShifts}>
          <Text>Mi turno</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={settings}>
          <Text>Configuración</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={logout}>
          <Text>Salir</Text>
        </MenuItem>
      </Menu>
    </View>
  );
}
