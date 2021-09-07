import React, {Component} from 'react';
import MyDonationsUI from './MyDonationsUI';

export default class MyDonations extends Component {
  state = {
    donations: [
      {
        lugar: 'Hospital Argerich',
        fecha: 'Jueves 20 de junio de 2021',
        hora: '8:45hs',
      },
      {
        lugar: 'Hospital Durant',
        fecha: 'Jueves 20 de junio de 2021',
        hora: '8:45hs',
      },
      {
        lugar: 'Hospital Argerich',
        fecha: 'Jueves 20 de junio de 2021',
        hora: '8:45hs',
      },
      {
        lugar: 'Hospital Dutant',
        fecha: 'Jueves 20 de junio de 2021',
        hora: '8:45hs',
      },
    ],
  };
  render() {
    return <MyDonationsUI donations={this.state.donations}/>;
  }
}
