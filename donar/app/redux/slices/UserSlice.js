import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import UserWS from '../../networking/api/endpoints/UserWS';

import {startLoading, showError, showSuccess} from './ErrorSlice';

export const login = createAsyncThunk(
  'user/login',
  async ({mail, password, pnToken, uuid}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await UserWS.login(mail, password, pnToken, uuid);
      dispatch(showSuccess());
      return response;
    } catch (error) {
      console.log('login error: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const logout = createAsyncThunk(
  'user/logout',
  async (userId, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await UserWS.logout(userId);
      dispatch(showSuccess());
      return response;
    } catch (error) {
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const recoveryPassword = createAsyncThunk(
  'user/recoveryPassword',
  async (mail, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await UserWS.recoveryPassword(mail);
      dispatch(showSuccess());
      return response;
    } catch (error) {
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);

//TODO: agregar user creation  createAsyncThunk

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (
    {userId, currentPassword, newPassword},
    {rejectWithValue, dispatch},
  ) => {
    console.log(userId, currentPassword, newPassword);
    try {
      dispatch(startLoading());
      const response = await UserWS.updatePassword(
        userId,
        currentPassword,
        newPassword,
      );
      dispatch(showSuccess());
      return response;
    } catch (error) {
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);

export const fetchSettings = createAsyncThunk(
  'user/fetchSettings',
  async ({}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await UserWS.fetchSettings();
      dispatch(showSuccess());
      return response;
    } catch (error) {
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const updateSettings = createAsyncThunk(
  'user/updateSettings',
  async ({settings}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await UserWS.updateSettings({settings});
      dispatch(showSuccess());
      return response;
    } catch (error) {
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: null,
      email: null,
    },
    session: {
      appId: null,
      jwt: null,
    },
    pnToken: null,
    uuid: null,
  },
  reducers: {
    updatePNTokenActionAction: (state, token) => {
      state.pnToken = token.payload;
      console.log('updatePNTokenAction token: ', state.pnToken);
    },

    updateJWTAction: state => {
      axios.defaults.headers.common.Authorization =
        'Bearer ' + state.session.jwt;
    },
    updateUUIDAction: (state, deviceId) => {
      state.uuid = deviceId.payload;
      console.log('updateUUID token: ', state.uuid);
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.isFetching = true;
    },
    [login.fulfilled]: (state, response) => {
      state.isFetching = false;
      state.succeed = true;
      state.user.id = response.payload.data.user.id;
      state.user.email = response.payload.data.user.mail;
      state.session.jwt = response.payload.data.token;
      state.session.appId = response.payload.data.appId;

      axios.defaults.headers.common.Authorization =
        'Bearer ' + response.payload.data.token;
    },
    [login.rejected]: (state, error) => {},

    [logout.pending]: state => {
      state.isFetching = true;
    },
    [logout.fulfilled]: (state, response) => {
      updateJWTAction(null);
      state.session.appId = null;
      state.session.jwt = null;
      state.user.id = null;
      state.user.mail = null;
    },
    [logout.rejected]: (state, error) => {},

    [recoveryPassword.pending]: state => {},
    [recoveryPassword.fulfilled]: state => {},
    [recoveryPassword.rejected]: (state, error) => {},

    [updatePassword.pending]: state => {},
    [updatePassword.fulfilled]: state => {},
    [updatePassword.rejected]: (state, error) => {},

    [fetchSettings.pending]: state => {},
    [fetchSettings.fulfilled]: (state, {response}) => {},
    [fetchSettings.rejected]: (state, error) => {},

    [updateSettings.pending]: state => {},
    [updateSettings.fulfilled]: (state, response) => {},
    [updateSettings.rejected]: (state, error) => {},
  },
});

export const {
  logoutAction,
  updatePNTokenAction,
  updateJWTAction,
  updateUUIDAction,
} = UserSlice.actions;

export default UserSlice.reducer;

//TODO: Terminar de darle lógica a los extra-reducers
