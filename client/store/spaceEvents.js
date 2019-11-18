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
  updateSpaceEvent({ rootState }, spaceEvent) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$patch(`/space-events/${spaceEvent.id}`, spaceEvent);
  },
  deleteSpaceEvent({ commit, rootState }, spaceEvent) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$delete(`/space-events/${spaceEvent.id}`, spaceEvent)
      .then(() => {
        commit('removeSpaceEvent', spaceEvent)
      });
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
  setUpdatedSpaceEventName (state, { spaceEven, name }) {
    spaceEven.name = name;
  },
  setUpdatedSpaceEventDescription (state, { spaceEvent, description }) {
    spaceEvent.description = description;
  },
  setUpdatedSpaceEventStart (state, { spaceEvent, start }) {
    spaceEvent.start = start;
  },
  setSpaceEvents (state, spaceEvents) {
    state.spaceEvents = spaceEvents;
  },
  appendSpaceEvent (state, spaceEvent) {
    state.spaceEvents.push(spaceEvent);
  },
  removeSpaceEvent(state, spaceEvent) {
    state.spaceEvents.splice(state.spaceEvents.indexOf(spaceEvent), 1);
  },
};
