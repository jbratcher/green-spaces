export const state = () => ({
  spaceEvent: {},
  spaceEvents: [],
  newSpaceEventName: '',
  newSpaceEventDescription: '',
  newSpaceEventStart: new Date().toISOString().substr(0, 10),
  newSpaceEventEnd: new Date().toISOString().substr(0, 10),
  newSpaceEventAddressName: '',
  newSpaceEventFullAddress: '',
  newSpaceEventImageSource: '',
  rsvp: null,
  attendees: [],
});

export const actions = {

  // create a new event
  createSpaceEvent({ commit, state }) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    return this.$axios.$post('/space-events', {
      name: state.newSpaceEventName,
      description: state.newSpaceEventDescription,
      start: state.newSpaceEventStart,
      end: state.newSpaceEventEnd ? state.newSpaceEventEnd : state.newSpaceEventStart,
      address_name: state.newSpaceEventAddressName,
      full_address: state.newSpaceEventFullAddress,
      image_source: state.newSpaceEventImageSource ? state.newSpaceEventImageSource : 'https://picsum.photos/id/977/1280/920',
      attendees: [],
    })
      .then((data) => {
        commit('appendSpaceEvent', data);
      })
      .catch((error) => {
        console.log(`Create event error: ${error}`);
      });
  },

  // update an event
  updateSpaceEvent({ commit }, spaceEvent) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    return this.$axios.$patch(`/space-events/${spaceEvent.id}`, spaceEvent);
  },

  // delete event
  deleteSpaceEvent({ commit }, spaceEvent) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    return this.$axios.$delete(`/space-events/${spaceEvent.id}`, spaceEvent)
      .then(() => {
        commit('removeSpaceEvent', spaceEvent)
      })
      .catch((error) => {
        console.log(`Remove event error: ${error}`);
      })
  },

  // fetch all events
  fetchSpaceEvents({ commit }) {
    return this.$axios.$get('/space-events')
      .then((data) => {
        commit('setSpaceEvents', data);
      })
      .catch((error) => {
        console.log(`Fetch events error: ${error}`);
      });
  },

  // fetch event by id
  fetchSpaceEventById({ commit }, id) {
    return this.$axios.$get(`/space-events/${id}`)
      .then((data) => {
        commit('setSpaceEvent', data);
      })
      .catch((error) => {
        console.log(`Fetch event error: ${error}`);
      });
  },

  // fetch event attendees by event id
  fetchSpaceEventAttendees({ commit }, spaceEvent) {
    return this.$axios.$get(`/space-events/${spaceEvent.id}/attendees`)
      .then(attendees => {
        commit('setSpaceEventAttendeesFromDB', { spaceEvent, attendees });
      })
      .catch((error) => {
        console.log(`Fetch event attendees error: ${error}`);
      });
  },

  // add/remove event attendees by event
  updateSpaceEventAttendees({ commit, state, rootState }, spaceEvent) {
    commit('setSpaceEventAttendees', { spaceEvent, attendees: spaceEvent.attendees, rootState })
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    this.$axios.$patch(`/space-events/${spaceEvent.id}/attending`, { spaceEvent, rsvp: state.rsvp, user: rootState.auth.user });
  },

};

export const mutations = {
  setNewSpaceEventName(state, name) {
    state.newSpaceEventName = name;
  },
  setNewSpaceEventDescription(state, description) {
    state.newSpaceEventDescription = description;
  },
  setNewSpaceEventStart(state, start) {
    state.newSpaceEventStart = start;
  },
  setNewSpaceEventEnd(state, end) {
    state.newSpaceEventEnd = end;
  },
  setNewSpaceEventAddressName(state, addressName) {
    state.newSpaceEventAddressName = addressName;
  },
  setNewSpaceEventFullAddress(state, fullAddress) {
    state.newSpaceEventFullAddress = fullAddress;
  },
  setNewSpaceEventImageSource(state, imageSource) {
    state.newSpaceEventImageSource = imageSource;
  },
  setUpdatedSpaceEventName(state, { spaceEvent, name }) {
    spaceEvent.name = name;
    state.spaceEvent.name = name;
  },
  setUpdatedSpaceEventDescription(state, { spaceEvent, description }) {
    spaceEvent.description = description;
    state.spaceEvent.description = description;
  },
  setUpdatedSpaceEventStart(state, { spaceEvent, start }) {
    spaceEvent.start = start;
    state.spaceEvent.start = start;
  },
  setUpdatedSpaceEventEnd(state, { spaceEvent, end }) {
    spaceEvent.end = end;
    state.spaceEvent.end = end;
  },
  setUpdatedSpaceEventAddressName(state, { spaceEvent, addressName }) {
    spaceEvent.address_name = addressName;
    state.spaceEvent.address_name = addressName;
  },
  setUpdatedSpaceEventFullAddress(state, { spaceEvent, fullAddress }) {
    spaceEvent.full_address = fullAddress;
    state.spaceEvent.full_address = fullAddress;
  },
  setUpdatedSpaceEventImageSource(state, { spaceEvent, imageSource }) {
    spaceEvent.image_source = imageSource;
    state.spaceEvent.image_source = imageSource;
  },
  setSpaceEventAttendeesFromDB(state, { spaceEvent, attendees }) {
    console.log(JSON.parse(JSON.stringify(attendees)))
    spaceEvent.attendees = attendees;
    if (state.spaceEvents[spaceEvent.id]) {
      state.spaceEvents[spaceEvent.id - 1].attendees = attendees;
    }
    if (attendees.some(attendee => attendee.id === spaceEvent.id)) {
      state.rsvp = true;
    } else {
      state.rsvp = false;
    }
  },
  setSpaceEventAttendees(state, { spaceEvent, attendees, rootState }) {
    // add user to attendees
    console.log(JSON.parse(JSON.stringify(attendees)));
    const { user } = rootState.auth;
    // if spaceEvent that matches spaceEvent.id exists
    if (state.spaceEvents[spaceEvent.id - 1]) {
      if (state.rsvp) {
        // add user to attendees
        if (Array.isArray(spaceEvent.attendees)) {
          if (attendees.length > 0 && !attendees.find(attendee => attendee.id === user.id)) {
            spaceEvent.attendees.push(user);
            state.spaceEvents[spaceEvent.id - 1].attendees.push(user);
            spaceEvent.attendees = [...new Set(spaceEvent.attendees)];
            state.spaceEvents[spaceEvent.id - 1].attendees = [...new Set(state.spaceEvents[spaceEvent.id - 1].attendees)]
          } else if (attendees.length === 0) {
            spaceEvent.attendees = [user];
            state.spaceEvents[spaceEvent.id - 1].attendees = [user];
          } else {
            return null;
          }
        } else {
          spaceEvent.attendees = [user];
        }
      } else if (!state.rsvp) {
        // remove user from attendees
        if (Array.isArray(attendees)) {
          spaceEvent.attendees = spaceEvent.attendees.filter(attendee => attendee.id !== user.id);
          state.spaceEvents[spaceEvent.id - 1].attendees = state.spaceEvents[spaceEvent.id - 1].attendees.filter(attendee => attendee.id !== user.id);
        } else {
          spaceEvent.attendees = [];
          state.spaceEvents[spaceEvent.id - 1].attendees = [];
        }
      }
    }
  },
  // set rsvp to match attendees list
  setRsvpByUser(state, { spaceEvent, userSpaceEvents }) {
    // check if user is in attendees
    console.log(JSON.parse(JSON.stringify(spaceEvent)))
    console.log(JSON.parse(JSON.stringify(userSpaceEvents)))
    if (userSpaceEvents && userSpaceEvents.some(userSpaceEvent => userSpaceEvent.id === spaceEvent.id)) {
      console.log('RSVP: true')
      state.rsvp = true;
      console.log(state.rsvp)
    } else {
      console.log('RSVP: false')
      state.rsvp = false;
      console.log(state.rsvp)
    }
  },
  toggleRsvp(state) {
    state.rsvp = !state.rsvp;
  },
  setSpaceEvent(state, spaceEvent) {
    state.spaceEvent = spaceEvent;
  },
  appendSpaceEvent(state, spaceEvent) {
    state.spaceEvents.push(spaceEvent);
  },
  removeSpaceEvent(state, spaceEvent) {
    state.spaceEvents.splice(state.spaceEvents.indexOf(spaceEvent), 1);
  },
  setSpaceEvents(state, spaceEvents) {
    state.spaceEvents = spaceEvents;
  },
};
