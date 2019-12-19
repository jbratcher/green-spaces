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
  // set attendees list by adding or removing users
  setUpdatedSpaceEventAttendees (state, { selectedEvent, user, rsvp }) {
    try {
      // add user
      if (rsvp) {
        // expects stringified array from db
        // if attendees type is non-null string, parse string to array for transformations
        if (typeof selectedEvent.attendees === 'string') {
          // if string is not null/empty
          if (selectedEvent.attendees) {
            // convert string back to array
            selectedEvent.attendees = JSON.parse(selectedEvent.attendees);
            // prevent adding a duplicate user to the array
            // if user id is not found in array
            if (!selectedEvent.attendees.find(attendee => attendee.id === user.id)) {
              // add user to end of attendees list
              selectedEvent.attendees = [ ...selectedEvent.attendees, user ];
            // if user is already in the attendees list, set rsvp back to false
            } else {
              console.warn('user already in attendees, duplicate entry blocked');
            }
          // if string is null/empty, replace with array containing the current user
          } else {
            selectedEvent.attendees = [ user ];
          }
          // removes falsy values from attendees array
          selectedEvent.attendees = Array.from(selectedEvent.attendees).filter(Boolean);
        } else if (selectedEvent.attendees === null) {
          selectedEvent.attendees = [ user ];
          // removes falsy values from attendees array
          selectedEvent.attendees = Array.from(selectedEvent.attendees).filter(Boolean);
        } else {
          console.warn(`selecteEvent.attendees add exception`);
          selectedEvent.attendees = '';
        }
        // if attendees type is a non-empty array and value is not exactly [""], transform value into a string for db storage
        if (selectedEvent.attendees.length !== 0 && selectedEvent.attendees !== [""]) {
          selectedEvent.attendees = JSON.stringify(selectedEvent.attendees);
        }
      // remove user
      } else if (!rsvp) {
        // if attendees value is not null/empty
        if (selectedEvent.attendees) {
          // remove user from attendees
          // Note: must parse to json before db storage, otherwise stores '[object Object]'
          selectedEvent.attendees = JSON.parse(selectedEvent.attendees)
            .filter(attendee => attendee.id !== user.id);
          // if resulting array is not null/empty
          if (selectedEvent.attendees.length > 0) {
            selectedEvent.attendees = JSON.stringify(selectedEvent.attendees);
          // if resulting array is null/empty
          } else if (selectedEvent.attendees.length === 0) {
            selectedEvent.attendees = '';
          } else {
            console.warn('attendees is not an array');
          }
        } else {
          // if attendees is null/empty, it is assumed to be an empty string
          selectedEvent.attendees = '';
        }
      } else {
        console.warn(`Attendees could not be set due to a ${rsvp} value of rsvp`);
      }
    } catch (error) {
      console.error(error);
      console.error(`\n Attendees was not able to be set due to an error: \n ${error}`);
    }
    return null;
  },
  // set rsvp to match attendees list
  setRsvpByUser (state, { selectedEvent, user }) {
    // convert to array, implied else set to empty array
    let attendeesArray = [];
    if (selectedEvent.attendees) {
      attendeesArray = JSON.parse(selectedEvent.attendees);
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
