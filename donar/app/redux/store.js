import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import ErrorSlice from './slices/ErrorSlice';
import UserSlice from './slices/UserSlice';



const reducers = combineReducers({
  error: ErrorSlice,
  user: UserSlice,

});
//TODO: mejorar la generación de la clave de encriptación
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  transforms: [
    encryptTransform({
      secretKey: '2004x28*2021',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
  ],
});
