import React from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import NavigatorConstant from '../../navigation/NavigatorConstant';
import {updateJWT, updateUUID} from '../../redux/reducers/authReducer';
import {fetchDevices} from '../../redux/reducers/deviceReducer';
import DeviceInfo from 'react-native-device-info';
import dispatchFetchDevices from '../../redux/dispatchFetchDevices';

const mapStateToProps = (state) => {
  return {
    jwt: state.auth.session.jwt,
    userID: state.auth.user.userID,
    devices: state.devices.devices,
  };
};

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  checkLengthDevices() {
    if (this.props.devices.length === 0) {
      this.props.navigation.replace(NavigatorConstant.NAVIGATOR.DEVICE);
    } else {
      this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING);
    }
    SplashScreen.hide();
  }

  componentDidMount() {
    this.getDeviceId();
    if (this.props.jwt != null) {
      console.log('Already logged - Fetching Devices');
      this.props.updateJWT();
      dispatchFetchDevices(() => this.checkLengthDevices());
    } else {
      console.log('Login');
      this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN);
      SplashScreen.hide();
    }
  }
  getDeviceId() {
    let uniqueId = DeviceInfo.getUniqueId();

    this.props.updateUUID(uniqueId);
  }

  render() {
    return <View />;
  }
}

const mapDispatchToProps = {
  fetchDevices,
  updateJWT,
  updateUUID,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);

//TODO: Separar lógica de UI