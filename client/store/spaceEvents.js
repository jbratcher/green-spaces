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
  updateSpaceEventAttendees({ commit, state, rootState }, payload) {
    const { selectedEvent, user, rsvp } = payload;
    commit('setUpdatedSpaceEventAttendees', { selectedEvent, user, rsvp })
    this.$axios.setHeader('Authorization', `Bearer ${rootState.auth.token}`)
    return this.$axios.$patch(`/space-events/${selectedEvent.id}`, selectedEvent);
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
  setUpdatedSpaceEventAttendees (state, { selectedEvent, user, rsvp }) {
    console.log(`User: ${JSON.stringify(user)}`);
    try {
      if (rsvp) {
        console.log(`Attendees: ${selectedEvent.attendees}`);
        console.log(`To array: ${Array.from(selectedEvent.attendees)}`);
        selectedEvent.attendees = [ ...selectedEvent.attendees, user ];
        // filters duplicates
        // selectedEvent.attendees = Array.from(new Set(selectedEvent.attendees));
        // ensures array for db
        if (selectedEvent.attendees.length !== 0) {
          selectedEvent.attendees = JSON.stringify(selectedEvent.attendees);
        }
        console.log(`Add attendeee: ${selectedEvent.attendees}`);
      } else if (!rsvp) {
        selectedEvent.attendees = JSON.parse(selectedEvent.attendees)
          .filter(attendee => attendee.id !== user.id);
        if (selectedEvent.attendees.length === 0) {
          selectedEvent.attendees = '';
        }
        console.log(`Remove attendeee: ${selectedEvent.attendees}`);
      } else {
        console.log(`Attendess could not be set due to a ${rsvp} value of rsvp`);
      }
    } catch (error) {
      console.log(error);
      console.log(`\n Attendees was not able to be set due to an error: \n ${error}`);
    }
    return null;
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
