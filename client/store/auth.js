export const state = () => ({
  isLoggedIn: null,
  firstName: null,
  lastName: null,
  loginEmail: null,
  loginPassword: null,
  loginError: null,
  registerEmail: null,
  registerPassword: null,
  registerError: null,
  token: null,
  user: {}
});

export const actions = {
  logout({ commit }) {
    commit('setToken', null);
    commit('setLoggedIn', false);
    commit('setUser', {});
    if (this.$router.currentRoute !== '/') {
      this.$router.replace('/');
    }
  },
  async login({ commit, state, rootState }) {
    commit('setLoginError', null);
    await this.$axios.$post('/auth/login', {
      email: state.loginEmail,
      password: state.loginPassword,
    })
      .then((data) => {
        commit('setToken', data.token);
        commit('setLoggedIn', true);
        this.$router.push('/');
      })
      .then(() => {
        this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
        this.$axios.$get('/current-user')
          .then((response) => {
            commit('setUser', response);
          })
      })
      .catch((error) => {
        console.log(`Login Error: ${error}`);
      });
  },
  async register({ commit, state, rootState }) {
    commit('setRegisterError', null);
    await this.$axios.$post('/auth/register', {
      email: state.registerEmail,
      password: state.registerPassword,
      firstName: state.firstName,
      lastName: state.lastName,
    })
      .then((data) => {
        commit('setToken', data.token);
        commit('setLoggedIn', true);
        this.$router.push('/');
      })
      .then(() => {
        this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
        this.$axios.$get('/current-user')
          .then((response) => {
            commit('setUser', response);
          })
      })
      .catch((error) => {
        console.log(`Registration error: ${error}`);
      });
  },
  async fetchUserById ({ commit, state, rootState }) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    await this.$axios.$get(`/users/${rootState.auth.user.id}`)
      .then((response) => {
        commit('setUser', response);
      })
      .catch((error) => {
        console.log(`Fetch user error: ${error}`);
      });
  },
  async fetchSpaceEventsAttending ({ commit, state, rootState }) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    await this.$axios.$get(`/users/${rootState.auth.user.id}/space-events/`)
      .then((response) => {
        commit('setSpaceEventsAttending', response);
      })
      .catch((error) => {
        console.log(`Fetch user error: ${error}`);
      });
  },
};

export const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

export const mutations = {
  setFirstName(state, firstName) {
    state.firstName = firstName;
  },
  setLastName(state, lastName) {
    state.lastName = lastName;
  },
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
  setUser(state, user) {
    state.user = user;
  },
  setSpaceEventsAttending(state, spaceEvents) {
    state.user.attending = spaceEvents;
  }
};
