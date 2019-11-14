export const state = () => ({
  isLoggedIn: null,
  loginEmail: null,
  loginPassword: null,
  loginError: null,
  registerEmail: null,
  registerPassword: null,
  registerError: null,
  token: null,
});

export const actions = {
  logout({ commit }) {
    commit('setToken', null);
    commit('setLoggedIn', false);
    if (this.$router.currentRoute !== '/') {
      this.$router.replace('/');
    }
  },
  async login({ commit, state }) {
    commit('setLoginError', null);
    await this.$axios.$post('/auth/login', {
      email: state.loginEmail,
      password: state.loginPassword,
    })
      .then((data) => {
        console.log(JSON.stringify(data));
        commit('setToken', data.token);
        commit('setLoggedIn', true);
        this.$router.push('/');
      })
      .catch((error) => {
        commit('setLoginError', `Login Error: ${error}`);
      });
  },
  register({ commit, state }) {
    commit('setRegisterError', null);
    return this.$axios.$post('/auth/register', {
      email: state.registerEmail,
      password: state.registerPassword,
    })
      .then((data) => {
        commit('setToken', data.token);
        commit('setLoggedIn', true);
        this.$router.push('/');
      })
      .catch((error) => {
        commit('setRegisterError', `Registration error: ${error}`);
      });
  },
};

export const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

export const mutations = {
  setLoggedIn(state, loggedIn) {
    state.isLoggedIn = loggedIn;
  },
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
