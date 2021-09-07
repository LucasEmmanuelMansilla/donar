import React, {Component, createRef} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import LandingUI from './LandingUI';

import {Dimensions, Image, View} from 'react-native';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.2257614;
const LONGITUDE = -75.5987237;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const itemWidth = Math.round(width * 1);

export default class Landing extends Component {
  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    markers: [
      {
        title: 'Unicentro',
        id: 1,
        coordinates: {
          latitude: 6.2408128,
          longitude: -75.5872219,
        },
      },
      {
        title: 'Parque San Antonio',
        id: 2,
        coordinates: {
          latitude: 6.24558,
          longitude: -75.568602,
        },
      },
    ],
    filter: [],
    data: [
      {
        id: 1,
        url: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/12/hipertextual-google-photos-ahora-tiene-mensajes-privados-que-compartas-fotos-mas-rapido-2019786039.jpg?fit=1200%2C720&ssl=1',
      },
      {
        id: 2,
        url: 'data:image/jpeg;base64,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',
      },
      {
        id: 3,
        url: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/12/hipertextual-google-photos-ahora-tiene-mensajes-privados-que-compartas-fotos-mas-rapido-2019786039.jpg?fit=1200%2C720&ssl=1',
      },
      {
        id: 4,
        url: 'data:image/jpeg;base64,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',
      },
    ],
    isCarousel: createRef(null),
  };

  componentDidUpdate() {
    this.filterFunction();
  }

  _renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Image style={{width: 100, height: 100}} source={{uri: item.url}} />
      </View>
    );
  };

  turnPush = () => {
    this.props.navigation.push(NavigatorConstant.NAVIGATOR.TURN);
  };

  qrPush = () => {
    this.props.navigation.push(NavigatorConstant.NAVIGATOR.QR);
  };

  filterFunction = value => {
    if (value != undefined) {
      this.setState({filter: this.state.markers.filter(mk => mk.id == value)});
    }
  };

  render() {
    return (
      <LandingUI
        turnPush={this.turnPush}
        filterFunction={this.filterFunction}
        filterValue={this.state.filterValue}
        markers={this.state.markers}
        region={this.state.region}
        filter={this.state.filter}
        qrPush={this.qrPush}
        _renderItem={this._renderItem}
        data={this.state.data}
        sliderWidth={width}
        itemWidth={itemWidth}
        isCarousel={this.state.isCarousel}
      />
    );
  }
}