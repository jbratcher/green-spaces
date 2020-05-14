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
  attendees: [],
  rsvp: null,
});

export const actions = {

  // create a new event
  async createSpaceEvent({ commit, state }) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    await this.$axios.$post('/space-events', {
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
  async updateSpaceEvent({ commit }, spaceEvent) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    await this.$axios.$patch(`/space-events/${spaceEvent.id}`, spaceEvent);
  },

  // delete event
  async deleteSpaceEvent({ commit }, spaceEvent) {
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    await this.$axios.$delete(`/space-events/${spaceEvent.id}`, spaceEvent)
      .then(() => {
        commit('removeSpaceEvent', spaceEvent)
      })
      .catch((error) => {
        console.log(`Remove event error: ${error}`);
      })
  },

  // fetch all events
  async fetchSpaceEvents({ commit }) {
    await this.$axios.$get('/space-events')
      .then((data) => {
        commit('setSpaceEvents', data);
      })
      .catch((error) => {
        console.log(`Fetch events error: ${error}`);
      });
  },

  // fetch event by id
  async fetchSpaceEventById({ commit }, id) {
    await this.$axios.$get(`/space-events/${id}`)
      .then((data) => {
        commit('setSpaceEvent', data);
      })
      .catch((error) => {
        console.log(`Fetch event error: ${error}`);
      });
  },

  // fetch event attendees by event id
  async fetchSpaceEventAttendees({ commit }, spaceEvent) {
    await this.$axios.$get(`/space-events/${spaceEvent.id}/attendees`)
      .then(attendees => {
        commit('setSpaceEventAttendeesFromDB', { spaceEvent, attendees });
      })
      .catch((error) => {
        console.log(`Fetch event attendees error: ${error}`);
      });
  },

  // add/remove event attendees by event
  async updateSpaceEventAttendees({ commit, state, rootState }, spaceEvent) {
    commit('setSpaceEventAttendees', { spaceEvent, attendees: spaceEvent.attendees })
    this.$axios.setHeader("Authorization", this.$auth.$state.tokenlocal);
    await this.$axios.$patch(`/space-events/${spaceEvent.id}/attending`, { spaceEvent, rsvp: state.rsvp, user: rootState.auth.user });
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
    spaceEvent.attendees = attendees;
    state.attendees = attendees;
    state.spaceEvent.attendees = attendees;
    if (state.spaceEvents[spaceEvent.id - 1]) {
      state.spaceEvents[spaceEvent.id - 1].attendees = attendees;
    }
    if (spaceEvent.attendees && spaceEvent.attendees.some(attendee => attendee.id === this.$auth.user.id)) {
      state.rsvp = true;
    } else {
      state.rsvp = false;
    }
  },
  setSpaceEventAttendees(state, { spaceEvent, attendees }) {
    // add user to attendees
    const user = this.$auth.user;
    // if spaceEvent that matches spaceEvent.id exists
    if (state.spaceEvents[spaceEvent.id - 1]) {
      if (state.rsvp) {
        // add user to attendees
        if (attendees.length > 0 && !attendees.find(attendee => attendee.id === user.id)) {
          spaceEvent.attendees.push(user);
          state.spaceEvents[spaceEvent.id - 1].attendees.push(user);
          spaceEvent.attendees = [...new Set(spaceEvent.attendees)];
          state.attendees = [...new Set(spaceEvent.attendees)];
          state.spaceEvents[spaceEvent.id - 1].attendees = [...new Set(state.spaceEvents[spaceEvent.id - 1].attendees)]
        } else if (attendees.length === 0) {
          spaceEvent.attendees = [user];
          state.attendees = [user];
          state.spaceEvents[spaceEvent.id - 1].attendees = [user];
        } else {
          return null;
        }
      } else if (!state.rsvp) {
        // remove user from attendees
        if (Array.isArray(attendees)) {
          spaceEvent.attendees = spaceEvent.attendees.filter(attendee => attendee.id !== user.id);
          state.attendees = spaceEvent.attendees.filter(attendee => attendee.id !== user.id);
          state.spaceEvents[spaceEvent.id - 1].attendees = state.spaceEvents[spaceEvent.id - 1].attendees.filter(attendee => attendee.id !== user.id);
        } else {
          spaceEvent.attendees = [];
          state.attendees = [];
          state.spaceEvents[spaceEvent.id - 1].attendees = [];
        }
      }
    }
  },
  // set rsvp to match attendees list
  setRsvpByUser(state, { spaceEvent, userSpaceEvents }) {
    // check if user is in attendees
    if (userSpaceEvents && userSpaceEvents.some(userSpaceEvent => userSpaceEvent.id === spaceEvent.id)) {
      state.rsvp = !state.rsvp;
    } else {
      state.rsvp = !state.rsvp;
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
