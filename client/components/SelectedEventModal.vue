<template>
  <v-container>
    <v-row>
      <v-col>

        <!-- Selected Event Modal -->
        <v-menu
          v-model="selectedOpen"
          :activator="selectedElement"
          :close-on-content-click="false"
          :color="selectedEvent.color"
          top
          transition="slide-y-transition"
        >

          <!-- Event/Form Display  -->
          <v-card class="d-flex flex-column">

            <!-- Header -->
            <v-card-title
              v-if="!editMode"
              :class="{'headline primary white--text justify-space-between': $breakpoint.mdAndUp, 'display-1 primary white--text justify-space-between': $breakpoint.smAndDown }"
            >
              {{ selectedEvent.name }}
              <v-btn
                @click="cancelEventEdit"
                color="primary darken-2"
                fab
              >
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-card-title
              v-if="editMode"
              :class="{'headline font-weight-regular primary white--text justify-space-between': $breakpoint.mdAndUp, 'display-1 primary white--text justify-space-between': $breakpoint.smAndDown }"
            >
              Edit {{ selectedEvent.name }}
              <v-btn
                @click="cancelEventEdit"
                color="primary darken-2"
                fab
              >
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-card-title>

            <!-- Body -->
            <v-container v-if="!editMode" class="d-flex flex-column justify-space-evenly">
              <v-card-subtitle
                v-text="eventDate"
                :class="{'body-1 font-weight-regular pt-0': $breakpoint.mdAndUp, 'title font-weight-regular pt-0': $breakpoint.smAndDown}"
              />
              <v-card-text
                v-text="selectedEvent.description"
                :class="{'body-1 font-weight-regular': $breakpoint.mdAndUp, 'title font-weight-regular': $breakpoint.smAndDown}"
              />
              <v-card-text :class="{'body-1 font-weight-regular': $breakpoint.mdAndUp, 'title font-weight-regular': $breakpoint.smAndDown}">
                Volunteers: {{ volunteersCount }}
              </v-card-text>
              <v-card-text>
                <ul>
                  <li v-for="user in selectedEvent.attendees" :key="user.id" class="d-flex align-center mb-3">
                    <v-avatar class="mr-3" size="32">
                      <v-img
                        :src="user.profile_image_source"
                      />
                    </v-avatar>
                    <p class="subtitle-1 mb-0">{{ user.full_name }}</p>
                  </li>
                </ul>
              </v-card-text>
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

            <v-divider v-if="user.id === selectedEvent.creator_id" />

            <!-- Actions -->
            <v-card-actions>
              <v-spacer />
              <!-- More info button -->
              <v-btn
                :to="'/events/' + selectedEvent.id"
                color="primary lighten-1"
                dark
                fab
                absolute
                bottom
                left
                nuxt
              >
                <v-icon>
                  mdi-dots-horizontal
                </v-icon>
              </v-btn>
              <!-- Edit/Cancel Edit Event Button -->
              <v-btn
                v-if="user.id === selectedEvent.creator_id"
                @click="toggleEditMode"
                :color="editMode ? 'warning' : 'secondary'"
                class="edit-btn"
                dark
                fab
                absolute
                bottom
                right
              >
                <v-icon>
                  {{ editMode ? 'mdi-pencil-off' : 'mdi-pencil' }}
                </v-icon>
              </v-btn>
              <!-- Update Event -->
              <v-btn
                v-if="editMode"
                @click="updateEvent"
                color="primary darken-2"
                class="update-btn"
                dark
                fab
                absolute
                bottom
                right
              >
                <v-icon>
                  mdi-content-save
                </v-icon>
              </v-btn>
              <!-- Update Event -->
              <v-btn
                v-if="editMode"
                @click="deleteEvent"
                color="error"
                class="delete-btn"
                dark
                fab
                absolute
                bottom
                right
              >
                <v-icon>
                  mdi-trash-can
                </v-icon>
              </v-btn>
              <!-- RSVP Button -->
              <v-btn
                v-if="!editMode"
                @click="toggleUserAttending"
                :color="rsvp ? 'warning' : 'primary'"
                dark
                fab
                absolute
                bottom
                right
              >
                <v-icon>
                  {{ rsvp ? 'mdi-account-minus' : 'mdi-account-plus' }}
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </v-col>
    </v-row>
  </v-container>
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
      'user',
    ]),
    // volunteer count by event (expects string)
    volunteersCount () {
      if (this.selectedEvent.attendees) {
        return this.selectedEvent.attendees.length;
      } else {
        return '0';
      }
    },
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
      // check if not empty object
      if (!(Object.entries(this.selectedEvent).length === 0 && this.selectedEvent.constructor === Object)) {
        this.setRsvpByUser({
          selectedEvent: this.selectedEvent,
          user: this.user,
        });
      } else {
        console.log('user rsvp not set');
      }
    },
  },
  mounted() {
    this.fetchSpaceEvents();
    this.spaceEvents.forEach(spaceEvent => this.fetchSpaceEventAttendees(spaceEvent));
  },
  methods: {
    ...mapActions('spaceEvents', [
      'deleteSpaceEvent',
      'fetchSpaceEvents',
      'fetchSpaceEventAttendees',
      'updateSpaceEvent',
      'updateSpaceEventAttendees',
    ]),
    ...mapMutations('spaceEvents', [
      'setRsvpByUser',
      'setSpaceEvent',
      'setUpdatedSpaceEventName',
      'setUpdatedSpaceEventDescription',
      'setUpdatedSpaceEventStart',
      'setUpdatedSpaceEventEnd',
      'setUpdatedSpaceEventAddressName',
      'setUpdatedSpaceEventFullAddress',
      'setUpdatedSpaceEventImageSource',
      'toggleRsvp',
    ]),
    // converts a date to ISO w/o resetting time zone (https://stackoverflow.com/questions/49330139/date-toisostring-but-local-time-instead-of-utc)
    toISOLocal (date) {
      const z = n => ('0' + n).slice(-2);
      const zz = n => ('00' + n).slice(-3);
      return date.getFullYear() + '-' + z(date.getMonth() + 1) + '-' + z(date.getDate()) + 'T' + z(date.getHours()) + ':' + z(date.getMinutes()) + ':' + z(date.getSeconds()) + '.' + zz(date.getMilliseconds()) + 'Z';
    },
    toggleUserAttending () {
      this.toggleRsvp();
      this.updateSpaceEventAttendees(this.selectedEvent);
    },
    cancelEventEdit () {
      this.resetEventForm();
    },
    deleteEvent () {
      this.deleteSpaceEvent(this.selectedEvent);
      this.resetEventForm();
    },
    enterEditMode () {
      this.editMode = true;
    },
    toggleEditMode () {
      this.editMode = !this.editMode;
    },
    resetEventForm () {
      this.editMode = false;
      this.$emit('toggleOpen', false);
    },
    updateEvent () {
      this.updateSpaceEvent(this.selectedEvent);
      this.editMode = false;
    }
  }
}
</script>

<style lang="scss">

.update-btn {
  margin-right: 15%;
}

.edit-btn{
  margin-right: 30%;
}

</style>
