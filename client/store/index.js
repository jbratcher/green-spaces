import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
