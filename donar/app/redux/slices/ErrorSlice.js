import {createSlice} from '@reduxjs/toolkit';
export const HTTP_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};
const ErrorSlice = createSlice({
  name: 'error',
  initialState: {
    httpStatus: HTTP_STATUS.IDLE,
    hideWifiWarnings: false,
    data: {
      code: -1,
      internal: -1,
      description: null,
    },
  },
  reducers: {
    startLoading: (state) => {
      state.httpStatus = HTTP_STATUS.LOADING;
    },
    stopLoading: (state) => {
      state.httpStatus = HTTP_STATUS.IDLE;
    },
    showSuccess: (state) => {
      state.httpStatus = HTTP_STATUS.SUCCESS;
    },
    showError: (state, error) => {
      state.httpStatus = HTTP_STATUS.ERROR;
      if (error.payload.code === 'ECONNABORTED') {
        state.data.code = 408;
      } else {
        try{
          console.log('showError status', error.payload.response.status);
          console.log('showError numError', error.payload.response.data.numError);
          state.data.code = error.payload.response.status;
          state.data.internal = error.payload.response.data.numError;
        }
        catch(error){
          state.data.code = 999;
        }
        
      }

      console.log('********** ERROR *************:');
      console.log('code: ', state.data.code);
      console.log('internal: ', state.data.internal);
      console.log('description: ', state.data.description);
      console.log('******************************');
    },
    clean: (state) => {
      state.httpStatus = HTTP_STATUS.IDLE;
      state.data.code = -1;
      state.data.internal = -1;
      state.data.description = null;
      state.hideWifiWarnings = false;
    },
    hideWifiWarnings: (state) => {
      state.hideWifiWarnings = true;
    },
    restoreWifiWarnings: (state) => {
      state.hideWifiWarnings = false;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  showSuccess,
  showError,
  clean,
  hideWifiWarnings,
  restoreWifiWarnings,
} = ErrorSlice.actions;

export default ErrorSlice.reducer;
