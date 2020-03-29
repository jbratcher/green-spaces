<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="pa-0">

        <!-- Page Header -->
        <v-sheet class="text-center text-shadow white--text" color="primary lighten-2">

          <h1 :class="{'display-2 font-weight-bold pt-6 pb-3': $breakpoint.mdAndUp, 'display-1 font-weight-bold pt-6 pb-3': $breakpoint.smAndDown}">
            Give your time
          </h1>
          <p :class="{'headline pt-3 pb-6': $breakpoint.mdAndUp, 'title pt-3 pb-6': $breakpoint.smAndDown}">
            Your time helps fight climate change
          </p>

        </v-sheet>

        <!-- Main Content -->
        <v-container>
          <v-row>
            <v-col class="text-center">
              <!-- Content Header -->
              <h2 :class="{'headline font-weight-bold py-5': $breakpoint.mdAndUp, 'title  font-weight-bold py-5': $breakpoint.smAndDown}">
                Upcoming Events
              </h2>
              <p :class="{'title font-weight-regular': $breakpoint.mdAndUp, 'subtitle-1 font-weight-regular': $breakpoint.smAndDown}">
                Find volunteer events near you
              </p>
            </v-col>
          </v-row>

          <v-row>

            <v-col>
              <!-- Event List -->
              <v-container>
                <v-row>
                  <v-col sm="7">
                    <v-container class="py-0">
                      <v-row>
                        <v-col class="py-0">
                          <ul>
                            <li v-for="event in eventsByDateOld" :key="event.id">
                              <h3 class="mb-3 pl-6">
                                {{ listDate(event.start) }}
                              </h3>
                              <v-card class="d-flex mb-6" hover>
                                <v-container class="pa-0" fluid>
                                <v-img
                                  alt="event image"
                                  src="https://picsum.photos/300/300"
                                  height="200px"
                                />
                                </v-container>
                               <v-container>
                                <v-card-title class="pt-0">
                                  {{ event.name }}
                                </v-card-title>
                                <v-card-subtitle class="subtitle-1 py-0">
                                  {{ listTime(event.start) }}
                                </v-card-subtitle>
                                <v-card-text v-if="event.creator_name" class="subtitle-1">
                                  Hosted by {{ event.creator_name }}
                                </v-card-text>
                                <v-card-text class="body-1">
                                  {{ event.attendees.length }} Volunteers Going
                                </v-card-text>
                                <v-btn
                                  :to="'/events/' + event.id"
                                  class="ml-3 mb-3"
                                  color="primary"
                                  nuxt
                                >
                                  More...
                                </v-btn>
                               </v-container>
                              </v-card>
                            </li>
                          </ul>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>

                  <v-col sm="5">
                    <v-sheet class="elevation-3">
                      <!-- Calendar Header -->
                      <v-sheet height="64">
                        <v-toolbar flat color="white">

                          <!-- Focus Current Date -->
                          <v-btn @click="setToday" class="mr-4" outlined >
                            Today
                          </v-btn>

                          <!-- Prev/Next Month Buttons -->
                          <v-btn @click="prev" fab text small>
                            <v-icon small>
                              mdi-chevron-left
                            </v-icon>
                          </v-btn>
                          <v-btn @click="next" fab text small>
                            <v-icon small>
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>

                          <!-- Month Display -->
                          <v-toolbar-title>{{ title }}</v-toolbar-title>

                        </v-toolbar>
                      </v-sheet>
                      <v-calendar
                        ref="miniCal"
                        v-model="focus"
                        :now="today"
                        @change="updateRange"
                        color="primary"
                        event-color="primary"
                        type="month"
                      />
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>

          </v-row>
          <v-row>

            <v-col>
              <!-- Add Event Button -->
              <v-card class="ml-12" color="transparent" flat>
                <p class="d-flex align-center">
                  <v-icon class="mr-2">
                    mdi-calendar-plus
                  </v-icon>
                  <span class="headline">
                    New Event
                  </span>
                </p>
              </v-card>

              <!-- Event Calendar -->
              <EventCalendar />
            </v-col>

          </v-row>
        </v-container>

        <!-- Add New Event Dialog -->
        <NewEventDialog />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EventCalendar from '../components/EventCalendar.vue';
import NewEventDialog from '../components/NewEventDialog.vue';

export default {
  components: {
    EventCalendar,
    NewEventDialog,
  },
  data: () => ({
    end: null,
    focus: new Date().toISOString().substr(0, 10),
    today: new Date().toISOString().substr(0, 10),
    start: null,
  }),
  computed: {
    ...mapState('spaceEvents', [
      'spaceEvents',
      'days',
      'months',
    ]),
    // return temporary array of events from newest to oldest
    eventsByDateNew () {
      return this.spaceEvents.slice().sort((a, b) => new Date(b.start) - new Date(a.start))
    },
    // return temporary array of events from oldest to newest
    eventsByDateOld () {
      return this.spaceEvents.slice().sort((a, b) => new Date(a.start) - new Date(b.start))
    },
    monthFormatter () {
      return this.$refs.miniCal.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
    // get current month long name
    title () {
      const { start, end } = this;
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start);
      const startYear = start.year;
      return `${startMonth} ${startYear}`;
    },
  },
  watch: {
    // return temporary array of events from newest to oldest
    eventsByDateNew () {
      return this.spaceEvents.slice().sort((a, b) => new Date(b.start) - new Date(a.start))
    },
    // return temporary array of events from oldest to newest
    eventsByDateOld () {
      return this.spaceEvents.slice().sort((a, b) => new Date(a.start) - new Date(b.start))
    },
  },
  mounted () {
    this.$refs.miniCal.checkChange();
    this.fetchSpaceEvents();
    this.getSpaceEventAttendeesByEvent(this.spaceEvents);
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEvents',
      'fetchSpaceEventAttendees',
    ]),
    getDayName (date) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
    },
    getMonthName (date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[date.getMonth()];
    },
    // format event date to dayName, Month yy
    listDate (start) {
      return this.getDayName(new Date(start)) + ', ' + this.getMonthName(new Date(start)) + ' ' + new Date(start).getDate();
    },
    // format event time to hh:mm AM/PM
    listTime (start) {
      const hours = new Date(start).getHours() % 12 || 12;
      const minutes = new Date(start).getMinutes();
      const suffix = new Date(start).getHours() > 11 ? 'PM' : 'AM';
      // format minutes to mm
      if (minutes === 0) {
        return hours + ':' + minutes + '0' + ' ' + suffix;
      } else if (minutes < 10) {
        return hours + ':' + '0' + minutes + ' ' + suffix;
      } else {
        return hours + ':' + minutes + ' ' + suffix;
      }
    },
    next () {
      this.$refs.miniCal.next()
    },
    // get suffix value for each numbered date
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    prev () {
      this.$refs.miniCal.prev()
    },
    setToday () {
      this.focus = this.today
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    },
    getSpaceEventAttendeesByEvent (spaceEvents) {
      this.spaceEvents.forEach((spaceEvent) => {
        this.fetchSpaceEventAttendees(spaceEvent);
      });
    }
  },
}
</script>

<style lang="scss">
</style>
