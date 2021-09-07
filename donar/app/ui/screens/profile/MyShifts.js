import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import MyShiftsUI from './MyShiftsUI';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.2257614;
const LONGITUDE = -75.5987237;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MyShifts extends Component {
  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    filter: [],
    markers: [
      {
        title: 'Unicentro',
        id: 1,
        coordinates: {
          latitude: 6.2408128,
          longitude: -75.5872219,
        },
      },
    ],
  };
  render() {
    return (
      <MyShiftsUI
        filter={this.state.filter}
        markers={this.state.markers}
        region={this.state.region}
      />
    );
  }
}
