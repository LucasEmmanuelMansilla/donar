import api from '../api';
export default UserWS = {
  login: async function (mail, password, pnToken, uuid) {
    return await api.post('/login', {
      mail,
      password,
      pnToken,
      uuid,
    });
  },

  //TODO: falta pasarle el userID
  logout: async function () {
    return await api.post('/users/userID/logout');
  },
  recoveryPassword: async function (mail) {
    return await api.post('/recoveryPassword', {mail});
  },

  createUser: async function (mail, password, name) {
    return await api.post('/users', {
      mail,
      password,
      name,
    });
  },
  //TODO: falta pasarel el userID
  updatePassword: async function (currentPassword, newPassword) {
    return await api.put('/users/FaltaUserId/password' {
      currentPassword,
      newPassword,
    });
  },
  fetchSettings: async function () {
    return await api.get('/pushSettings' );
  },

  updateSettings: async function ({settings}) {
    return await api.put('/pushSettings',{settings});
  },
};
