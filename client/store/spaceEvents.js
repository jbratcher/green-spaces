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
    try {
      if (rsvp) {
        // ensures array (possible parameters: array, string, null)
        // if attendees type is array, use push otherwise create a new array with the user object
        // if attendees type is string, array is assumed to be empty and create with the current user id
        if (Array.isArray(selectedEvent.attendees)) {
          selectedEvent.attendees.push(user);
          // filters out falsy values from attendees array
          selectedEvent.attendees = selectedEvent.attendees.filter(Boolean);
        } else if (typeof selectedEvent.attendees === "string") {
          if (selectedEvent.attendees) {
            console.log(`Before parse: ${JSON.stringify(selectedEvent.attendees)}`);
            selectedEvent.attendees = JSON.parse(selectedEvent.attendees);
            console.log(`After parse: ${JSON.stringify(selectedEvent.attendees)}`);
            console.log(`Before check: ${Array.isArray(selectedEvent.attendees)}`);
            // prevent adding a duplicate user to the array
            // if user id is not found in array
            if (!selectedEvent.attendees.find(attendee => attendee.id === user.id)) {
              console.log('triggered');
              selectedEvent.attendees = [ ...selectedEvent.attendees, user ];
            } else {
              console.log('duplicate entry blocked');
              state.rsvp = false;
            }
          } else {
            selectedEvent.attendees = [ user ];
          }
          // filters out falsy values from attendees array
          selectedEvent.attendees = Array.from(selectedEvent.attendees).filter(Boolean);
        }
        // ensures array for db
        // if attendees type is a non-empty array and value is not exactly [""],
        // transform value into a string for db storage
        if (selectedEvent.attendees.length !== 0 && selectedEvent.attendees !== [""]) {
          selectedEvent.attendees = JSON.stringify(selectedEvent.attendees);
        }
      } else if (!rsvp) {
        // if attendees avlue is an array that is not empty, null, undefined, etc
        if (selectedEvent.attendees) {
          // filters objects in array matching the current user id, parse string to array, array to array
          // if JSON.parse if omitted, [object Object] string literal can be passed which does not store the data
          selectedEvent.attendees = JSON.parse(selectedEvent.attendees)
            .filter(attendee => attendee.id !== user.id);
          if (selectedEvent.attendees.length > 0) {
            selectedEvent.attendees = JSON.stringify(selectedEvent.attendees);
          } else if (selectedEvent.attendees.length === 0) {
            selectedEvent.attendees = '';
          } else {
            console.log('attendees is not an array');
          }
        } else {
          // if attendees is falsy, it is assumed to be an empty string
          selectedEvent.attendees = '';
        }
      } else {
        console.warn(`Attendess could not be set due to a ${rsvp} value of rsvp`);
      }
    } catch (error) {
      console.error(error);
      console.error(`\n Attendees was not able to be set due to an error: \n ${error}`);
    }
    return null;
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
