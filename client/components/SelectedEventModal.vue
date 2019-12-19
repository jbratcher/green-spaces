<template>
  <v-row class="fill-height">
    <v-col>

      <!-- Selected Event Modal -->
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        :color="selectedEvent.color"
        center
      >

        <!-- Event/Form Display  -->
        <v-card class="d-flex flex-column">

          <!-- Header -->
          <v-card-title
            class="headline primary white--text justify-space-between"
            primary-title
          >
            <h2
              v-if="!editMode"
            >
              {{ selectedEvent.name }}
            </h2>
            <h2
              v-if="editMode"
            >
              Edit {{ selectedEvent.name }}
            </h2>

            <v-icon
              @click="cancelEventEdit"
              class="close-icon"
              dark
            >
              mdi-close-circle-outline
            </v-icon>
          </v-card-title>

          <!-- Body -->
          <v-container v-if="!editMode" class="d-flex flex-column justify-space-evenly">
            <v-card-text
              v-text="eventDate"
              class="py-0 event-date"
            />
            <v-card-text
              v-text="selectedEvent.description"
              class="py-5"
            />
            <v-card-text
              class="py-5"
            >
              <span class="subtitle">Volunteers:</span> {{ JSON.parse(selectedEvent.attendees).length }}
            </v-card-text>
            <v-card-text
              class="py-5"
            >
              <ul>
                <li v-for="user in JSON.parse(selectedEvent.attendees)" :key="user.id">
                  {{ user.username }}
                </li>
              </ul>
            </v-card-text>
            <v-switch
              :value="rsvp"
              @change="toggleUserAttending"
              label="RSVP"
            />
            <v-btn
              :to="'/events/' + selectedEvent.id"
              class="more-button ml-4"
              color="primary"
              nuxt
            >
              More...
            </v-btn>
          </v-container>

          <!-- Edit Mode -->
          <v-container v-if="editMode">
            <v-text-field
              :value="selectedEvent.name"
              :counter="50"
              :rules="nameRules"
              @input="setUpdatedSpaceEventName({ selectedEvent, name: $event })"
              label="Name"
              required
            />
            <v-textarea
              :value="selectedEvent.description"
              :rules="descriptionRules"
              :counter="1000"
              @input="setUpdatedSpaceEventDescription({ selectedEvent, description: $event })"
              label="Description"
              name="Description"
              auto-grow
              required
            />
            <datetime
              v-model="startDateTime"
              type="datetime"
              value-zone="local"
              zone="local"
              use12-hour
              minute-step="15"
              color="primary"
              required
            />
            <datetime
              v-model="endDateTime"
              type="datetime"
              value-zone="local"
              zone="local"
              use12-hour
              minute-step="15"
              color="primary"
            />
            <v-textarea
              :value="selectedEvent.address_name"
              :rules="addressNameRules"
              :counter="1000"
              @input="setUpdatedSpaceEventAddressName({ selectedEvent, addressName: $event })"
              label="Address Name"
              name="AddressName"
              auto-grow
              required
            />
            <v-textarea
              :value="selectedEvent.full_address"
              :rules="fullAddressRules"
              :counter="1000"
              @input="setUpdatedSpaceEventFullAddress({ selectedEvent, fullAddress: $event })"
              label="Full Address"
              name="FullAddress"
              auto-grow
              required
            />
            <v-textarea
              :value="selectedEvent.image_source"
              :rules="imageSourceRules"
              :counter="1000"
              @input="setUpdatedSpaceEventImageSource({ selectedEvent, image_source: $event })"
              label="Image Source"
              name="ImageSource"
              auto-grow
              required
            />
          </v-container>

          <v-divider v-if="user.id === selectedEvent.user_id" />

          <!-- Actions -->
          <v-card-actions>
            <v-spacer />
            <v-btn
              v-if="!editMode && user.id === selectedEvent.user_id"
              @click="enterEditMode"
              color="primary"
            >
              Edit
            </v-btn>
            <v-btn
              v-if="editMode && user.id === selectedEvent.user_id"
              @click="cancelEventEdit"
              color="info"
            >
              Cancel
            </v-btn>
            <v-btn
              v-if="editMode"
              @click="updateEvent"
              color="primary darken-2"
            >
              Save
            </v-btn>
            <v-btn
              v-if="editMode"
              @click="deleteEvent"
              color="error"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

export default {
  components: {
    datetime: Datetime,
  },
  props: {
    selectedElement: {
      type: null,
      default: null,
    },
    selectedEvent: {
      type: Object,
      default: () => {},
    },
    selectedOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      date: new Date().toJSON(),
      endDateTime: new Date().toJSON(),
      editMode: false,
      startDateTime: new Date().toJSON(),
      switch1: false,
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 1000) || 'Description must be less than 1000 characters',
      ],
      addressNameRules: [
        v => !!v || 'Address Name is required',
        v => (v && v.length <= 1000) || 'Address Name must be less than 1000 characters',
      ],
      fullAddressRules: [
        v => !!v || 'Full Address is required',
        v => (v && v.length <= 1000) || 'Full Address must be less than 1000 characters',
      ],
      imageSourceRules: [
        v => !!v || 'Image Source is required',
        v => (v && v.length <= 1000) || 'Image Source must be less than 1000 characters',
      ],
    }
  },
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'newSpaceEventDescription',
      'newSpaceEventStart',
      'newSpaceEventEnd',
      'newSpaceEventAddressName',
      'newSpaceEventFullAddress',
      'newSpaceEventImageSource',
      'rsvp',
      'spaceEvents',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
    eventDate () {
      return new Date(this.selectedEvent.start).toLocaleString();
    }
  },
  watch: {
    // workaround to set datetime of event, cannot use v-on handlers, watching v-model changes and passing formatted date to vuex mutation
    startDateTime () {
      const formatted = this.startDateTime.substr(0, 19).replace('T', ' ');
      this.setUpdatedSpaceEventStart({ selectedEvent: this.selectedEvent, start: formatted });
    },
    endDateTime () {
      const formatted = this.endDateTime.substr(0, 19).replace('T', ' ');
      this.setUpdatedSpaceEventEnd({ selectedEvent: this.selectedEvent, end: formatted });
    },
    // convert stored datetime format to tz datetime to match picker format
    selectedEvent () {
      this.startDateTime = this.toISOLocal(new Date(this.selectedEvent.start));
      this.endDateTime = this.toISOLocal(new Date(this.selectedEvent.end));
      if (!(Object.entries(this.selectedEvent).length === 0 && this.selectedEvent.constructor === Object)) {
        console.log('set rsvp by user');
        this.setRsvpByUser({
          selectedEvent: this.selectedEvent,
          user: this.user,
        });
      } else {
        console.log('user rsvp not set');
      }
    },
  },
  created () {
    this.fetchSpaceEvents();
  },
  mounted() {
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEvents',
      'updateSpaceEvent',
      'updateSpaceEventAttendees',
      'deleteSpaceEvent',
    ]),
    ...mapMutations('spaceEvents', [
      'setUpdatedSpaceEventName',
      'setUpdatedSpaceEventDescription',
      'setUpdatedSpaceEventStart',
      'setUpdatedSpaceEventEnd',
      'setUpdatedSpaceEventAddressName',
      'setUpdatedSpaceEventFullAddress',
      'setUpdatedSpaceEventImageSource',
      'setUpdatedSpaceEventAttendees',
      'toggleRsvp',
      'setRsvpByUser',
      'setSpaceEvent',
    ]),
    // converts a date to ISO w/o resetting time zone (https://stackoverflow.com/questions/49330139/date-toisostring-but-local-time-instead-of-utc)
    toISOLocal (date) {
      const z = n => ('0' + n).slice(-2);
      const zz = n => ('00' + n).slice(-3);
      return date.getFullYear() + '-' + z(date.getMonth() + 1) + '-' + z(date.getDate()) + 'T' + z(date.getHours()) + ':' + z(date.getMinutes()) + ':' + z(date.getSeconds()) + '.' + zz(date.getMilliseconds()) + 'Z';
    },
    toggleUserAttending () {
      this.toggleRsvp();
      this.updateSpaceEventAttendees({
        selectedEvent: this.selectedEvent,
        user: this.user,
        rsvp: this.rsvp
      });
    },
    cancelEventEdit () {
      this.fetchSpaceEvents();
      this.resetEventForm();
    },
    deleteEvent () {
      this.deleteSpaceEvent(this.selectedEvent);
      this.resetEventForm();
    },
    enterEditMode () {
      this.editMode = true;
    },
    resetEventForm () {
      this.editMode = false;
      this.$emit('toggleOpen', false);
    },
    updateEvent () {
      this.updateSpaceEvent(this.selectedEvent);
      this.resetEventForm();
    }
  }
}
</script>

<style lang="scss">
  .subtitle {
    font-weight: 700;
  }
</style>
