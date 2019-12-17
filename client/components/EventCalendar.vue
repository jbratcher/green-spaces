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
        <SelectedEventModal
          :selected-open="selectedOpen"
          :selected-element="selectedElement"
          :selected-event="selectedEvent"
          @toggleOpen="toggleOpen"
        />

      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import SelectedEventModal from '../components/SelectedEventModal.vue';

export default {
  components: {
    SelectedEventModal,
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
      // this.selectedOpen = this.selectedEvent.attendees.filter(attee)
    }
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
      'setSpaceEvent',
    ]),
    // converts a date to ISO w/o resetting time zone (https://stackoverflow.com/questions/49330139/date-toisostring-but-local-time-instead-of-utc)
    toISOLocal (date) {
      const z = n => ('0' + n).slice(-2);
      const zz = n => ('00' + n).slice(-3);
      return date.getFullYear() + '-' + z(date.getMonth() + 1) + '-' + z(date.getDate()) + 'T' + z(date.getHours()) + ':' + z(date.getMinutes()) + ':' + z(date.getSeconds()) + '.' + zz(date.getMilliseconds()) + 'Z';
    },
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
    // have to click twice to open modal?
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        this.selectedOpen = true;
        this.setSpaceEvent(this.selectedEvent);
      }
      console.log(`Before Condition: ${this.selectedOpen}`);
      if (!this.selectedOpen) {
        open();
      } else {
        this.selectedOpen = false;
        open();
      }
      console.log(`After Condition: ${this.selectedOpen}`);
      nativeEvent.stopPropagation()
    },
    toggleOpen (openBoolean) {
      this.selectedOpen = openBoolean;
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
    enterEditMode () {
      this.editMode = true;
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
    min-height: 100px;
  }

  .v-card {

    &>.v-input {
      margin: 0.5rem 1rem;
    }

    &>.vdatetime {
      margin: 1.5rem 1rem;
    }

  }

  .v-menu__content {

    .v-card {
      width: 80vw;

      .container {
        min-height: 250px;
      }

    }

    .v-card__text:first-of-type {
      font-size: 1.25rem;
      font-weight: 900;
    }

    h2 {
      font-size: 1.5rem;
    }

    .close-icon {
      font-size: 2rem;
    }

    .more-button {
      width: 30%;
    }

  }

  @media screen and (min-width: 768px) {

    .v-menu__content {

      .v-card {
        width: 35vw;
      }

      .v-card__text:first-of-type {
        font-weight: 900;
      }

      h2 {
        font-size: 2.25rem;
      }

      .close-icon {
        font-size: 2.5rem;
      }

      .more-button {
        width: 25%;
      }

    }

  }

</style>
