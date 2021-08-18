import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {HTTP_STATUS} from '../redux/reducers/errorReducer';
import {PopupErrorMessage} from '../components/Layout';
import {clean, showError} from '../redux/reducers/errorReducer';
import {Loading} from '../components/UI';
import NetInfo from '@react-native-community/netinfo';
//TODO: agregar para mostrar mensaje y callback ej un reintentar
const mapStateToProps = (state) => {
  return {
    httpStatus: state.error.httpStatus,
    error: state.error.data,
    hideWifiWarnings: state.error.hideWifiWarnings,
  };
};
class ErrorHandling extends React.Component {
  state = {
    isInternetReachable: true,
    isConnected: true,
    netListener: null,
  };
  loadingTimer = null;
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const networkListener = NetInfo.addEventListener((state) => {
      this.setState({isConnected: state.isConnected});
      this.setState({isInternetReachable: state.isInternetReachable});
    });
    this.setState({netListener: networkListener});
  }
  componentWillUnmount() {
    // this.state.netListener.removeEventListener();
  }
  componentDidUpdate() {
    if (this.props.httpStatus === HTTP_STATUS.LOADING) {
      clearTimeout(this.loadingTimer);
      this.loadingTimer = setTimeout(() => {
        console.log('No hubo respuesta del broker via socket');
        this.props.showError({code: 'ECONNABORTED'});
      }, 20000);
    } else {
      clearTimeout(this.loadingTimer);
    }
  }

  closeError() {
    this.props.clean();
  }
  //TODO: mover la UI a otro archivo
  render() {
    if (this.state.isInternetReachable === false && this.props.hideWifiWarnings === false) {
      return (
        <PopupErrorMessage
          open={true}
          onSwipe={() => {}}
          onClose={() => {}}
          httpError={600}
          codeInternal={0}
        />
      );
    }
    switch (this.props.httpStatus) {
      case HTTP_STATUS.IDLE:
        return <View />;
      case HTTP_STATUS.LOADING:
        return <Loading loading={true} />;
      case HTTP_STATUS.ERROR: {
        return (
          <PopupErrorMessage
            open={true}
            onSwipe={() => {
              this.closeError();
            }}
            onClose={() => {
              this.closeError();
            }}
            httpError={this.props.error.code}
            codeInternal={this.props.error.internal}
          />
        );
      }
      default:
        return <View />;
    }
  }
}
const mapDispatchToProps = {clean, showError};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandling);
