import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import IconButton from '../../components/IconButton';

import CarouselComponent from '../../components/CarouselComponent';
import MapComponent from '../../components/MapComponent';

export default function LandingUI({
  markers,
  provider,
  region,
  filterFunction,
  turnPush,
  filter,
  qrPush,
  _renderItem,
  data,
  sliderWidth,
  itemWidth,
  isCarousel,
}) {
  return (
    <View>
      <Pressable onPress={() => qrPush()}>
        <CarouselComponent
          isCarousel={isCarousel}
          data={data}
          _renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </Pressable>
      <MapComponent
        filter={filter}
        markers={markers}
        region={region}
        turnPush={turnPush}
      />
      <View style={style.buttons}>
        <IconButton value="0" filterFunction={filterFunction} name="calendar" />
        <IconButton value="2" filterFunction={filterFunction} name="tint" />
        <IconButton value="1" filterFunction={filterFunction} name="home" />
        <IconButton
          value="2"
          filterFunction={filterFunction}
          name="map-marker"
        />
      </View>
    </View>
  );
}
;

const style = StyleSheet.create({
  map: {
    marginTop: 10,
    width: '100%',
    height: '50%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
