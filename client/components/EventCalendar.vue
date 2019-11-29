<template>
  <v-row class="fill-height">
    <v-col>

      <!-- Calendar Header -->
      <v-sheet class="calendar-header mx-auto" height="64">
        <v-toolbar flat color="white">

          <!-- Focus Current Date -->
          <v-btn outlined class="mr-4" @click="setToday">
            Today
          </v-btn>

          <!-- Prev/Next Month Buttons -->
          <v-btn fab text medium @click="prev">
            <v-icon large>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn fab text medium @click="next">
            <v-icon large>
              mdi-chevron-right
            </v-icon>
          </v-btn>

          <!-- Month Display -->
          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer />

          <!-- Change Calendar Type -->
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                outlined
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <!-- Calendar Content -->
      <v-sheet class="mx-auto calendar-content" elevation="5">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="spaceEvents"
          event-color="primary"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        />

        <!-- Selected Event Modal -->
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          :color="selectedEvent.color"
          center
          offset-x
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
                class="display-1"
              >
                {{ selectedEvent.name }}
              </h2>
              <h2
                v-if="editMode"
                class="display-1"
              >
                Edit {{ selectedEvent.name }}
              </h2>

              <v-icon
                dark
                @click="cancelEventEdit"
              >
                mdi-close
              </v-icon>
            </v-card-title>

            <!-- Body -->
            <v-card-text
              v-if="!editMode"
              class="subtitle-2 mt-10 mx-10"
              v-text="selectedEvent.start"
            />
            <v-card-text
              v-if="!editMode"
              class="body-1 mb-5 mx-10"
              v-text="selectedEvent.description"
            />
            <v-btn
              v-if="!editMode"
              class="mb-10 ml-12"
              color="primary"
              nuxt
              :to="'/events/' + selectedEvent.id"
              width="25%"
            >
              More...
            </v-btn>

            <!-- Edit Mode -->
            <v-text-field
              v-if="editMode"
              :value="selectedEvent.name"
              :counter="50"
              :rules="nameRules"
              class="ma-5 mx-10"
              label="Name"
              required
              @input="setUpdatedSpaceEventName({ selectedEvent, name: $event })"
            />
            <v-textarea
              v-if="editMode"
              class="ma-5 mx-10"
              :value="selectedEvent.description"
              :rules="descriptionRules"
              :counter="1000"
              label="Description"
              name="Description"
              auto-grow
              required
              @input="setUpdatedSpaceEventDescription({ selectedEvent, description: $event })"
            />
            <datetime
              v-if="editMode"
              v-model="startDateTime"
              type="datetime"
              value-zone="local"
              zone="local"
              use12-hour
              :minute-step="15"
              color="primary"
              class="my-5"
              required
            />
            <datetime
              v-if="editMode"
              v-model="endDateTime"
              type="datetime"
              value-zone="local"
              zone="local"
              use12-hour
              :minute-step="15"
              color="primary"
              class="my-5"
            />
            <v-textarea
              v-if="editMode"
              :value="selectedEvent.address_name"
              :rules="addressNameRules"
              :counter="1000"
              label="Address Name"
              name="AddressName"
              auto-grow
              required
              @input="setUpdatedSpaceEventAddressName({ selectedEvent, addressName: $event })"
            />
            <v-textarea
              v-if="editMode"
              :value="selectedEvent.full_address"
              :rules="fullAddressRules"
              :counter="1000"
              label="Full Address"
              name="FullAddress"
              auto-grow
              required
              @input="setUpdatedSpaceEventFullAddress({ selectedEvent, fullAddress: $event })"
            />
            <v-textarea
              v-if="editMode"
              :value="selectedEvent.image_source"
              :rules="imageSourceRules"
              :counter="1000"
              label="Image Source"
              name="ImageSource"
              auto-grow
              required
              @input="setUpdatedSpaceEventImageSource({ selectedEvent, image_source: $event })"
            />

            <v-divider />

            <!-- Actions -->
            <v-card-actions>
              <v-spacer />
              <v-btn
                v-if="!editMode && user.id === selectedEvent.user_id"
                color="primary"
                @click="editMode = true"
              >
                Edit
              </v-btn>
              <v-btn
                v-if="editMode && user.id === selectedEvent.user_id"
                color="info"
                @click="cancelEventEdit"
              >
                Cancel
              </v-btn>
              <v-btn
                v-if="editMode"
                color="primary darken-2"
                @click="updateEvent"
              >
                Save
              </v-btn>
              <v-btn
                v-if="editMode"
                color="error"
                @click="deleteEvent"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'

export default {
  components: {
    datetime: Datetime,
  },
  data: () => ({
    date: new Date().toJSON(),
    startDateTime: new Date().toJSON(),
    endDateTime: new Date().toJSON(),
    editMode: false,
    end: null,
    focus: new Date().toISOString().substr(0, 10),
    start: null,
    selectedElement: null,
    selectedEvent: {},
    selectedOpen: false,
    today: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
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
  }),
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'newSpaceEventDescription',
      'newSpaceEventStart',
      'newSpaceEventEnd',
      'newSpaceEventAddressName',
      'newSpaceEventFullAddress',
      'newSpaceEventImageSource',
      'spaceEvents',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
  },
  watch: {
    // workaround to set datetime of event, cannot use v-on handlers, watching v-model changes and passing formatted date to vuex mutation
    startDateTime () {
      console.log(this.startDateTime);
      const formatted = this.startDateTime.substr(0, 19).replace('T', ' ');
      console.log(`Start value: ${formatted}`);
      this.setUpdatedSpaceEventStart({ selectedEvent: this.selectedEvent, start: formatted });
    },
    endDateTime () {
      console.log(this.endDateTime);
      const formatted = this.endDateTime.substr(0, 19).replace('T', ' ');
      console.log(`End value: ${formatted}`);
      this.setUpdatedSpaceEventEnd({ selectedEvent: this.selectedEvent, end: formatted });
    },
  },
  created () {
    this.fetchSpaceEvents();
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEvents',
      'updateSpaceEvent',
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
      'setSpaceEvent',
    ]),
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      console.log(`Selected event: ${JSON.stringify(event)}`);
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
        this.setSpaceEvent(this.selectedEvent);
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    cancelEventEdit () {
      this.fetchSpaceEvents();
      this.resetEventForm();
    },
    deleteEvent () {
      this.deleteSpaceEvent(this.selectedEvent);
      this.resetEventForm();
    },
    resetEventForm () {
      this.selectedOpen = false;
      this.editMode = false;
    },
    updateEvent () {
      this.updateSpaceEvent(this.selectedEvent);
      this.resetEventForm();
    }
  }
}
</script>

<style lang="scss">

  .calendar-header, .calendar-content {
    width: 80vw;
  }

  .v-calendar-weekly__week {
    min-height: 20vh;
  }

</style>
