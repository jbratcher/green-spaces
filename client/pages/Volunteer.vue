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
      <v-sheet class="py-10">

        <!-- Content Header -->
        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title pb-12">
          Find volunteer events near you
        </p>

        <!-- Add Event Button -->
        <p>
          <v-icon class="add-new-event">
            mdi-calendar-plus
          </v-icon>
          <span>Add Event</span>
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

  .grid-2-1 {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nam"
      "des"
      "cal"
      "btns";
    gap: 2rem 0;

      .v-text-field {
        grid-area: nam;
        margin-bottom: 3rem;
      }

      .v-textarea {
        grid-area: des;
      }

      .v-picker {
        grid-area: cal;
      }

      .v-sheet {
        grid-area: btns;
      }
  }

  .add-new-event {
    cursor: pointer;
  }

  .v-menu__content {
    width: 80vw;
  }

  @media screen and (min-width: 768px) {

    .grid-2-1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "nam cal"
        "des cal"
        "btns cal";
      gap: 2rem 4rem;
    }

    .v-menu__content {
      width: 40vw;
    }

  }

</style>
