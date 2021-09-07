import React, {Component} from 'react';
import ProfileScreenUI from './ProfileScreenUI';

export default class ProfileScreen extends Component {
  state = {
    isVisible: false,
    selectedIndex: 0,
    dataUser: {
      nombre: 'Juan Perez',
      birth: '10/02/1993',
      bloodType: '0+',
      frequentDonate: true,
      weight: '50K',
      height: '1.65',
      diseasesToDeclare: [
        {idDisease: 1, desc: 'Cancer'},
        {idDisease: 2, desc: 'Covid'},
        {idDisease: 3, desc: 'Gripe'},
      ],
    },
  };

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  _visibleModal = () => {
    this.setState({isVisible: !this.state.isVisible});
  };
  render() {
    return (
      <ProfileScreenUI
        _visibleModal={this._visibleModal}
        isVisible={this.state.isVisible}
        dataUser={this.state.dataUser}
        handleIndexChange={this.handleIndexChange}
        selectedIndex={this.state.selectedIndex}
      />
    );
  }
}
