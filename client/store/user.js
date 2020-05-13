export const state = () => ({
  userSpaceEvents: [],
});

export const actions = {
  async fetchSpaceEventsAttending({ commit }) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    await this.$axios
      .$get(`/user/space-events/`)
      .then(response => {
        console.log(response)
        commit("setSpaceEventsAttending", response);
      })
      .catch((error) => {
        console.log(`Fetch user error: ${error}`);
      });
  },
};

export const mutations = {
  setSpaceEventsAttending(state, userSpaceEvents) {
    state.userSpaceEvents = userSpaceEvents;
  },
};
