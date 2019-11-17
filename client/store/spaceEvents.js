export const state = () => ({
  spaceEvents: [],
  newSpaceEventName: '',
  newSpaceEventDescription: '',
  newSpaceEventStart: new Date().toISOString().substr(0, 10),
  newSpaceEventId: null,
});

export const actions = {
  createSpaceEvent({ commit, state, rootState }) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$post('/space-events', {
      name: state.newSpaceEventName,
      description: state.newSpaceEventDescription,
      start: state.newSpaceEventStart,
    })
      .then((data) => {
        commit('appendSpaceEvent', data);
        commit('newSpaceEventName', null);
        commit('newSpaceEventDescription', null);
        commit('newSpaceEventStart', new Date().toISOString().substr(0, 10));
      })
      .catch((error) => {
        commit('appendSpaceEvent', `Create event error: ${error}`);
      });
  },
  updateSpaceEvent({ rootState }, project) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$patch(`/space-events/${project.id}`, project);
  },
  fetchSpaceEvents ({ commit }) {
    return this.$axios.$get('/space-events')
      .then((data) => {
        commit('setSpaceEvents', data);
      })
      .catch((error) => {
        commit('setSpaceEvents', `Set event error: ${error}`);
      });
  },
};

export const mutations = {
  setNewSpaceEventName (state, name) {
    state.newSpaceEventName = name;
  },
  setNewSpaceEventDescription (state, description) {
    state.newSpaceEventDescription = description;
  },
  setNewSpaceEventStart (state, start) {
    state.newSpaceEventStart = start;
  },
  setNewSpaceEventId (state, id) {
    state.newSpaceEventId = id;
  },
  appendSpaceEvent (state, spaceEvent) {
    state.spaceEvents.push(spaceEvent);
  },
  setSpaceEvents (state, spaceEvents) {
    state.spaceEvents = spaceEvents;
  },
};
