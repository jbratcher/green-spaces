// import router from '../router';
import HTTP from '../http';

export const state = () => ({
  spaceEvents: [],
  newSpaceEventName: 'Default',
});

export const actions = {
  // createProject({ commit, state }) {
  //   return HTTP().post('/projects', {
  //     title: state.newProjectName,
  //   })
  //     .then(({ data }) => {
  //       commit('appendProject', data);
  //       commit('newProjectName', null);
  //     })
  //     .catch(() => {
  //       commit('appendProject', 'An error has occured trying to create a new project.');
  //     });
  // },
  fetchSpaceEvents ({ commit }) {
    return HTTP().get('/space-events')
      .then(({ data }) => {
        console.log(data);
        commit('setSpaceEvents', data);
      })
      .catch(() => {
        commit('setSpaceEvents', 'Unable to fetch events for this space');
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
