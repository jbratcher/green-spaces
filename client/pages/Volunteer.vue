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

        <!-- Vuetify Event Calendar Template -->
        <EventCalendar />

      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
import EventCalendar from '../components/EventCalendar.vue';
import NewEventDialog from '../components/NewEventDialog.vue';

export default {
  components: {
    EventCalendar,
    NewEventDialog,
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

    .v-menu__content {
      width: 40vw;
    }

  }

</style>
