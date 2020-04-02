<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="pa-0">

        <v-card class="d-flex flex-column align-center mx-auto" flat :width="$breakpoint.mdAndUp ? '80vw' : '90vw'">
          <v-img
            :src="spaceEvent.image_source"
            lazy-src="https://picsum.photos/id/977/1280/920"
            width="1280"
            max-height="300"
            cover
          />

          <!-- Edit Mode -->
          <v-container v-if="user.id === spaceEvent.creator_id" class="d-flex justify-end">
            <!-- Edit/Cancel Edit Event Button -->
              <v-btn
                @click="toggleEditMode"
                :color="editMode ? 'warning' : 'secondary'"
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
              >
                <v-icon>
                  mdi-content-save
                </v-icon>
              </v-btn>
          </v-container>

          <!-- Edit Event Info -->

          <!-- Edit Mode -->
          <v-container v-if="editMode">
            <v-text-field
              :value="spaceEvent.name"
              :counter="50"
              :rules="nameRules"
              @input="setUpdatedSpaceEventName({ spaceEvent, name: $event })"
              label="Name"
              required
            />
            <v-textarea
              class="mb-12"
              :value="spaceEvent.description"
              :rules="descriptionRules"
              :counter="1000"
              @input="setUpdatedSpaceEventDescription({ spaceEvent, description: $event })"
              label="Description"
              name="Description"
              auto-grow
              required
            />
            <datetime
            v-model="startDateTime"
              class="my-6"
              color="primary"
              input-id="startTime"
              :minute-step="15"
              required
              type="datetime"
              use12-hour
              value-zone="local"
              zone="local"
            />
            <datetime
              v-model="endDateTime"
              class="my-6"
              color="primary"
              input-id="endTime"
              :minute-step="15"
              required
              type="datetime"
              use12-hour
              value-zone="local"
              zone="local"
            />
            <v-textarea
              class="mt-12"
              :value="spaceEvent.address_name"
              :rules="addressNameRules"
              :counter="1000"
              @input="setUpdatedSpaceEventAddressName({ spaceEvent, addressName: $event })"
              label="Address Name"
              name="AddressName"
              auto-grow
              required
            />
            <v-textarea
              :value="spaceEvent.full_address"
              :rules="fullAddressRules"
              :counter="1000"
              @input="setUpdatedSpaceEventFullAddress({ spaceEvent, fullAddress: $event })"
              label="Full Address"
              name="FullAddress"
              auto-grow
              required
            />
            <v-textarea
              :value="spaceEvent.image_source"
              :rules="imageSourceRules"
              :counter="1000"
              @input="setUpdatedSpaceEventImageSource({ spaceEvent, imageSource: $event })"
              label="Image Source"
              name="ImageSource"
              auto-grow
              required
            />
          </v-container>

          <!-- Event Info -->
          <v-container v-if="!editMode">
            <v-row>
              <v-col class="d-flex align-center justify-space-between">
                <!-- Event Name -->
                <v-card-title :class="{'display-1 font-weight-bold': $breakpoint.mdAndUp, 'headline font-weight-bold': $breakpoint.smAndDown}">
                  {{ spaceEvent.name }}
                </v-card-title>
                <!-- RSVP Button -->
                <v-btn
                  @click="toggleUserAttending"
                  :color="rsvp ? 'warning' : 'primary'"
                >
                  <v-icon>
                    {{ rsvp ? 'mdi-account-minus' : 'mdi-account-plus' }}
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <!-- Event Date & Time -->
                <v-card-subtitle class="subtitle-1">
                  {{ spaceEvent.start }}
                </v-card-subtitle>
                <!-- Event Location Name -->
                <v-card-text :class="{'headline': $breakpoint.mdAndUp, 'title font-weight-regular': $breakpoint.smAndDown}">
                  {{ spaceEvent.address_name }}
                </v-card-text>
                <!-- Event Location Address -->
                <v-card-text :class="{'title font-weight-regular': $breakpoint.mdAndUp, 'subtitle-1 font-weight-regular': $breakpoint.smAndDown}">
                  {{ spaceEvent.full_address }}
                </v-card-text>
                <!-- Event Description -->
                <v-card-text :class="{'body-1': $breakpoint.mdAndUp, 'title font-weight-regular': $breakpoint.smAndDown}">
                  {{ spaceEvent.description }}
                </v-card-text>
                <!-- Volunteer List -->
                <v-card-text :class="{'body-1': $breakpoint.mdAndUp, 'title font-weight-regular': $breakpoint.smAndDown}">Volunteers RSVP'd</v-card-text>
                <ul v-if="spaceEvent.attendees">
                  <li v-for="user in spaceEvent.attendees" :key="user.id">
                    <v-avatar size="48">
                      <v-img
                        :src="user.profile_image_source"
                      />
                    </v-avatar>
                    <p>{{ user.full_name }}</p>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

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
  data() {
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
      'spaceEvent',
      'rsvp',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
  },
  created() {
    this.fetchSpaceEventById(this.$route.params.id);
    this.setRsvpByUser({
      spaceEvent: this.spaceEvent,
      user: this.user,
    });
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEventById',
      'fetchSpaceEventAttendees',
      'updateSpaceEvent',
      'updateSpaceEventAttendees',
    ]),
    ...mapMutations('spaceEvents', [
      'setRsvpByUser',
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
      this.updateSpaceEventAttendees(this.spaceEvent);
    },
    toggleEditMode () {
      this.editMode = !this.editMode;
    },
    updateEvent () {
      this.updateSpaceEvent(this.spaceEvent);
      this.editMode = false;
    },
  },
  watch: {
    // workaround to set datetime of event, cannot use v-on handlers, watching v-model changes and passing formatted date to vuex mutation
    startDateTime () {
      const formatted = this.startDateTime.substr(0, 19).replace('T', ' ');
      this.setUpdatedSpaceEventStart({ spaceEvent: this.spaceEvent, start: formatted });
    },
    endDateTime () {
      const formatted = this.endDateTime.substr(0, 19).replace('T', ' ');
      this.setUpdatedSpaceEventEnd({ spaceEvent: this.spaceEvent, end: formatted });
    },
    // convert stored datetime format to tz datetime to match picker format
    spaceEvent () {
      this.startDateTime = this.toISOLocal(new Date(this.spaceEvent.start));
      this.endDateTime = this.toISOLocal(new Date(this.spaceEvent.end));
      this.fetchSpaceEventAttendees(this.spaceEvent);
    },
  },
}
</script>

<style lang="scss">
</style>
