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
      <v-sheet class="py-10 d-flex flex-column">

        <!-- Content Header -->
        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title pb-12">
          Find volunteer events near you
        </p>

        <!-- Event List -->

        <v-container class="events">
          <v-container class="events-list">
            <ul>
              <li v-for="event in spaceEvents" :key="event.id">
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
                    <p class="attendees">
                      5 Volunteers Going
                    </p>
                  </v-sheet>
                </v-card>
              </li>
            </ul>
          </v-container>
          <v-sheet class="mini-calendar-container" elevation="5">
            <v-calendar
              ref="mini-calendar"
              v-model="focus"
              class="mini-calendar"
              color="primary"
              event-color="primary"
              :now="today"
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
    focus: new Date().toISOString().substr(0, 10),
    today: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    ...mapState('spaceEvents', [
      'spaceEvents',
      'days',
      'months',
    ]),
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
    listDate (start) {
      return this.getDayName(new Date(start)) + ', ' + this.getMonthName(new Date(start)) + ' ' + new Date(start).getDate();
    },
    listTime (start) {
      const hours = new Date(start).getHours() % 12 || 12;
      const minutes = new Date(start).getMinutes();
      const suffix = new Date(start).getHours() > 11 ? 'PM' : 'AM';
      if (minutes === 0) {
        return hours + ':' + minutes + '0' + ' ' + suffix;
      } else if (minutes < 10) {
        return hours + ':' + '0' + minutes + ' ' + suffix;
      } else {
        return hours + ':' + minutes + ' ' + suffix;
      }
    }
  },
}
</script>

<style lang="scss">

  .add-new-event {
    width: 85vw;
    margin: 0 auto;

    v-icon {
      cursor: pointer;
    }

  }

  @media screen and (min-width: 768px) {
    .events {
      display: grid;
      grid-template-areas:
        "eList eList eList eList . ."
        "eList eList eList eList . ."
        "eList eList eList eList . miniCal";
    }

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

      }

    }

    .mini-calendar-container {
      grid-area: miniCal;

      .v-calendar-weekly__week, .v-calendar-weekly__day {
        min-height: 50px;
      }

    }

  }

</style>
