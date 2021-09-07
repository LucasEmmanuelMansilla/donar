import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {ProviderPropType} from 'react-native-maps';
import MarkerComponent from './MarkerComponent';

export default function MapComponent({
  provider,
  region,
  onPress,
  filter,
  markers,
}) {
  return (
    <MapView
      style={style.map}
      provider={provider}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={false}
      initialRegion={region}
      showsUserLocation={true}
      followsUserLocation={true}>
      {filter.length > 0
        ? filter.map(marker => (
            <MarkerComponent
              key={marker.id}
              id={marker.id}
              coordinates={marker.coordinates}
              turnPush={onPress}
            />
          ))
        : markers.map(marker => (
            <MarkerComponent
              key={marker.id}
              id={marker.id}
              coordinates={marker.coordinates}
              turnPush={onPress}
            />
          ))}
    </MapView>
  );
}

MapComponent.propType = {
  provider: ProviderPropType,
};

const style = StyleSheet.create({
  map: {
    marginTop: 10,
    width: '100%',
    height: '50%',
  },
});
