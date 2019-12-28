<template>
  <v-layout>
    <v-col class="pa-0 text-center">

      <!-- Page Header -->
      <v-sheet color="primary lighten-2" class="white--text">

        <h1 class="display-3 pt-6 pb-3">
          Give your time
        </h1>
        <p class="headline pt-3 pb-6">
          Your time helps fight climate change
        </p>

      </v-sheet>

      <!-- Main Content -->
      <v-sheet class="py-5 d-flex flex-column">

        <!-- Content Header -->
        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title">
          Find volunteer events near you
        </p>

        <!-- Event List -->
        <v-container class="events">
          <v-container class="events-list">
            <ul>
              <li v-for="event in eventsByDateOld" :key="event.id">
                <h3 class="mb-3">
                  {{ listDate(event.start) }}
                </h3>
                <v-card class="mb-6">
                  <p class="event-time mt-3 mx-3">
                    {{ listTime(event.start) }}
                  </p>
                  <v-sheet class="event-details mt-3">
                    <p class="group-name">
                      Group Name
                    </p>
                    <p class="event-name">
                      {{ event.name }}
                    </p>
                    <p v-if="event.creator_name" class="host">
                      Hosted by {{ event.creator_name }}
                    </p>
                    <p class="attendees">
                      {{ event.attendees.length }} Volunteers Going
                    </p>
                  </v-sheet>
                  <v-btn
                    :to="'/events/' + event.id"
                    class="more-button"
                    color="primary"
                    nuxt
                  >
                    More...
                  </v-btn>
                </v-card>
              </li>
            </ul>
          </v-container>
          <v-sheet class="mini-calendar-container" elevation="5">
            <!-- Calendar Header -->
            <v-sheet class="calendar-header mx-auto" height="64">
              <v-toolbar flat color="white">

                <!-- Focus Current Date -->
                <v-btn @click="setToday" outlined class="mr-4">
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
              class="mini-calendar"
              color="primary"
              event-color="primary"
              type="month"
            />
          </v-sheet>
        </v-container>

        <!-- Add Event Button -->
        <p class="add-new-event d-flex align-center">
          <v-icon class="mr-2">
            mdi-calendar-plus
          </v-icon>
          <span class="headline">
            New Event
          </span>
        </p>

        <!-- Add New Event Dialog -->
        <NewEventDialog />

        <!-- Event Calendar -->
        <EventCalendar />

      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
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
  mounted () {
    this.$refs.miniCal.checkChange();
  },
  methods: {
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
  },
}
</script>

<style lang="scss">

  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;

    .events-list {
      grid-area: eList;
      text-align: left;

      .v-card {
        display: flex;

        .event-details {
          display: flex;
          flex-direction: column;
          width: fit-content;

          p {
            margin-bottom: 0.25rem;
          }

          .event-time, .attendees {
            color: #666;
          }

          .group-name {
            color: #333;
            font-size: 1rem;
            font-weight: 700;
          }

          .event-name {
            font-size:1.25rem;
            font-weight: 900;
          }

        }

        .more-button {
          align-self: center;
          margin-left: auto;
          margin-right: 1rem;
        }

      }

    }

  }

  .add-new-event {
    width: 80vw;
    margin: 0 auto;

    v-icon {
      cursor: pointer;
    }

  }

  @media screen and (min-width: 768px) {
    .events {
      display: grid;
      grid-template-areas:
        "eList eList eList eList eList miniCal"
        "eList eList eList eList eList ."
        "eList eList eList eList eList .";
      grid-template-columns: repeat(5, 1fr) 30vw;
      gap: 1rem;
      margin: 3rem;
      padding: 3rem;
    }

    .mini-calendar-container {
      grid-area: miniCal;

      .calendar-header {
        width: auto;
      }

      .v-calendar-weekly__week, .v-calendar-weekly__day {
        min-height: 50px;
      }

    }

  }

</style>
