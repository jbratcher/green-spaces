// import router from '../router';
import HTTP from '../http';

export const state = () => ({
  registerEmail: null,
  registerPassword: null,
  registerError: null,
  loginEmail: null,
  loginPassword: null,
  loginError: null,
  token: null,
});

export const actions = {
  logout({ commit }) {
    commit('setToken', null);
    if (this.$router.currentRoute !== '/') {
      this.$router.replace('/');
    }
  },
  login({ commit, state }) {
    commit('setLoginError', null);
    return HTTP().post('/auth/login', {
      email: state.loginEmail,
      password: state.loginPassword,
    })
      .then(({ data }) => {
        commit('setToken', data.token);
        this.$router.push('/');
      })
      .catch(() => {
        commit('setLoginError', 'An error has occured trying to log in to your account.');
      });
  },
  register({ commit, state }) {
    commit('setRegisterError', null);
    return HTTP().post('/auth/register', {
      email: state.registerEmail,
      password: state.registerPassword,
    })
      .then(({ data }) => {
        commit('setToken', data.token);
        this.$router.push('/');
      })
      .catch(() => {
        commit('setRegisterError', 'An error has occured trying to create your account.');
      });
  },
};

export const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setRegisterError(state, error) {
    state.registerError = error;
  },
  setRegisterEmail(state, email) {
    state.registerEmail = email;
  },
  setRegisterPassword(state, password) {
    state.registerPassword = password;
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
  setLoginEmail(state, email) {
    state.loginEmail = email;
  },
  setLoginPassword(state, password) {
    state.loginPassword = password;
  },
};
