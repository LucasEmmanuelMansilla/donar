import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {BackHandler, View, Text} from 'react-native';
//import {Provider} from 'react-redux';
//TODO: No existe la carpeta "src" en el proyecto.
//import RootNavigator from './navigation';
// import store from './redux/store/store';
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistStore} from 'redux-persist';
// import PNHandler from './Extra/PushNotification';
// import ErrorHandling from './Extra/ErrorHandling';
// import Toast from 'react-native-toast-message';

//import BrokerSocket from './Extra/BrokerSocket';
//import UserMessageHandling from './Extra/UserMessageHandling';
//import ToastConfig from './Extra/ToastConfig';

const App = () => {
  //disable hardware backbutton
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);
  return (
       <View>
           <Text>sasd</Text>
       </View>
  //  <RootNavigator />
  );
};

export default App;

// <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistStore(store)}>
    //     <RootNavigator />
    //     <PNHandler />
    //     <ErrorHandling />
    //     {
    //       // <BrokerSocket />
    //       // <Toast config = {ToastConfig} ref={(ref) => Toast.setRef(ref)} />
    //     }
    //     <Toast ref={(ref) => Toast.setRef(ref)} />
    //   </PersistGate>
    // </Provider>