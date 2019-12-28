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
  rsvp: false,
});

export const actions = {
  createSpaceEvent({ commit, state, rootState }) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
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
  updateSpaceEvent({ commit, state, rootState }, spaceEvent) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$patch(`/space-events/${spaceEvent.id}`, spaceEvent);
  },
  updateSpaceEventAttendees({ commit, state, rootState }, selectedEvent) {
    commit('setSpaceEventAttendees', { selectedEvent, attendees: selectedEvent.attendees, rootState })
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    this.$axios.$patch(`/space-events/${selectedEvent.id}/attending`, { selectedEvent, rsvp: state.rsvp });
  },
  deleteSpaceEvent({ commit, rootState }, spaceEvent) {
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$delete(`/space-events/${spaceEvent.id}`, spaceEvent)
      .then(() => {
        commit('removeSpaceEvent', spaceEvent)
      })
      .catch((error) => {
        console.log(`Remove event error: ${error}`);
      })
  },
  fetchSpaceEventAttendees ({ commit, state }) {
    return this.$axios.$get(`/space-events/${state.spaceEvent.id}/attendees`)
      .then((data) => {
        commit('setSpaceEventAttendees', data);
      })
      .catch((error) => {
        console.log(`Fetch event attendees error: ${error}`);
      });
  },
  fetchSpaceEventById ({ commit, state }) {
    return this.$axios.$get(`/space-events/${state.spaceEvent.id}`)
      .then((data) => {
        commit('setSpaceEvent', data);
      })
      .catch((error) => {
        console.log(`Fetch event error: ${error}`);
      });
  },
  fetchSpaceEvents ({ commit }) {
    return this.$axios.$get('/space-events')
      .then((data) => {
        commit('setSpaceEvents', data);
      })
      .catch((error) => {
        console.log(`Fetch events error: ${error}`);
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
  setNewSpaceEventEnd (state, end) {
    state.newSpaceEventEnd = end;
  },
  setNewSpaceEventAddressName (state, addressName) {
    state.newSpaceEventAddressName = addressName;
  },
  setNewSpaceEventFullAddress (state, fullAddress) {
    state.newSpaceEventFullAddress = fullAddress;
  },
  setNewSpaceEventImageSource (state, imageSource) {
    state.newSpaceEventImageSource = imageSource;
  },
  setUpdatedSpaceEventName (state, { selectedEvent, name }) {
    selectedEvent.name = name;
  },
  setUpdatedSpaceEventDescription (state, { selectedEvent, description }) {
    selectedEvent.description = description;
  },
  setUpdatedSpaceEventStart (state, { selectedEvent, start }) {
    selectedEvent.start = start;
  },
  setUpdatedSpaceEventEnd (state, { selectedEvent, end }) {
    selectedEvent.end = end;
  },
  setUpdatedSpaceEventAddressName (state, { selectedEvent, addressName }) {
    selectedEvent.address_name = addressName;
  },
  setUpdatedSpaceEventFullAddress (state, { selectedEvent, fullAddress }) {
    selectedEvent.full_address = fullAddress;
  },
  setUpdatedSpaceEventAddressImageSource (state, { selectedEvent, imageSource }) {
    selectedEvent.image_source = imageSource;
  },
  setSpaceEventAttendees(state, { selectedEvent, attendees, rootState }) {
    // add user to attendees
    const { user } = rootState.auth;
    if (state.spaceEvents[selectedEvent.id - 1]) {
      if (state.rsvp) {
        console.log('true');
        // add user to attendees
        if (typeof attendees === 'string' && attendees) {
          console.log('string');
          selectedEvent.attendees = JSON.parse(selectedEvent.attendees);
          state.spaceEvents[selectedEvent.id - 1].attendees = JSON.parse(state.spaceEvents[selectedEvent.id - 1].attendees);
          console.log(`after mod: ${JSON.stringify(selectedEvent.attendees)}`);
        } else if (Array.isArray(selectedEvent.attendees)) {
          console.log('array');
          if (attendees.length > 0 && !attendees.find(attendee => attendee.id === user.id)) {
            selectedEvent.attendees.push(user);
            state.spaceEvents[selectedEvent.id - 1].attendees.push(user);
            console.log(`after mod: ${JSON.stringify(selectedEvent.attendees)}`);
          } else if (attendees.length === 0) {
            selectedEvent.attendees = [user];
            state.spaceEvents[selectedEvent.id - 1].attendees = [user];
          } else {
            console.log('Duplicate entry blocked');
            return null;
          }
        } else {
          console.log('null');
          selectedEvent.attendees = [user];
        }
      } else if (!state.rsvp) {
        console.log('false');
        // remove user from attendees
        if (typeof attendees === 'string' && attendees) {
          console.log('string');
          selectedEvent.attendees = JSON.parse(JSON.stringify(selectedEvent.attendees));
          state.spaceEvents[selectedEvent.id - 1].attendees = JSON.parse(JSON.stringify(state.spaceEvents[selectedEvent.id - 1].attendees));
          selectedEvent.attendees.filter(attendee => attendee.id !== user.id);
          state.spaceEvents[selectedEvent.id - 1].attendees.filter(attendee => attendee.id !== user.id);
        } else if (Array.isArray(attendees)) {
          console.log('array');
          console.log(`user id: ${user.id}`);
          selectedEvent.attendees.map(attendee => console.log(`attendee id: ${attendee.id}`));
          selectedEvent.attendees = selectedEvent.attendees.filter(attendee => attendee.id !== user.id);
          state.spaceEvents[selectedEvent.id - 1].attendees = state.spaceEvents[selectedEvent.id - 1].attendees.filter(attendee => attendee.id !== user.id);
          console.log(`after mod: ${JSON.stringify(selectedEvent.attendees)}`);
        } else {
          console.log('null');
          selectedEvent.attendees = [];
          state.spaceEvents[selectedEvent.id - 1].attendees = [];
        }
      }
    }
  },
  // set rsvp to match attendees list
  setRsvpByUser (state, { selectedEvent, user }) {
    // convert to array, implied else set to empty array
    let attendeesArray = [];
    if (selectedEvent.attendees) {
      attendeesArray = JSON.parse(JSON.stringify(selectedEvent.attendees));
    }
    // check if user is in attendees
    if (attendeesArray.find(attendee => attendee.id === user.id)) {
      console.log('user in attendees');
      state.rsvp = true;
    } else {
      console.log('user not in attendees');
      state.rsvp = false;
    }
  },
  toggleRsvp (state) {
    state.rsvp = !state.rsvp;
    console.log(`Rsvp value: ${state.rsvp}`)
  },
  setSpaceEvent (state, spaceEvent) {
    state.spaceEvent = spaceEvent;
  },
  appendSpaceEvent (state, spaceEvent) {
    state.spaceEvents.push(spaceEvent);
  },
  removeSpaceEvent(state, spaceEvent) {
    state.spaceEvents.splice(state.spaceEvents.indexOf(spaceEvent), 1);
  },
  setSpaceEvents (state, spaceEvents) {
    state.spaceEvents = spaceEvents;
  },
};
