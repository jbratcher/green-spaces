// import router from '../router';
import HTTP from '../http';

export const state = () => ({
  spaceEvents: [],
  newSpaceEventName: '',
});

export const actions = {
  createSpaceEvent({ commit, state }) {
    return HTTP().post('/space-evetns', {
      title: state.newSpaceEventName,
    })
      .then(({ data }) => {
        commit('appendSpaceEvent', data);
        commit('newSpaceEventName', null);
      })
      .catch((error) => {
        commit('appendSpaceEvent', `Create event error: ${error}`);
      });
  },
  fetchSpaceEvents ({ commit }) {
    return HTTP().get('/space-events')
      .then(({ data }) => {
        console.log(data);
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
  appendSpaceEvent (state, spaceEvent) {
    state.spaceEvents.push(spaceEvent);
  },
  setSpaceEvents (state, spaceEvents) {
    state.spaceEvents = spaceEvents;
  },
};
