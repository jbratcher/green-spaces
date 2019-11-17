<template>
  <v-layout>
    <v-col class="pa-0 text-center">

      <v-sheet color="primary lighten-2" class="white--text">

        <h1 class="display-3 pt-6 pb-3">
          Give your time
        </h1>
        <p class="headline pt-3 pb-6">
          Your time helps fight climate change
        </p>

      </v-sheet>

      <v-sheet class="py-10">

        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title pb-12">
          Find volunteer events near you
        </p>

        <p>
          <v-icon class="add-new-event">
            mdi-calendar-plus
          </v-icon>
          <span>Add Event</span>
        </p>

        <v-sheet class="my-6 mx-auto" elevation="5" width="80vw" height="500">
          <v-calendar
            type="month"
            value="2019-11-01"
            :events="spaceEvents"
            event-color="primary"
          />
        </v-sheet>

        <template v-for="event in spaceEvents">
          <SpaceEventDialog
            :key="event.id"
            :event="event"
          />
        </template>

      </v-sheet>

      <NewEventDialog />

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import SpaceEventDialog from '../components/SpaceEventDialog.vue';
import NewEventDialog from '../components/NewEventDialog.vue';

export default {
  components: {
    SpaceEventDialog,
    NewEventDialog,
  },
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    startRules: [
      v => !!v || 'Start Date is required'
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 1000) || 'Description must be less than 1000 characters',
    ],
  }),
  computed: {
    ...mapState('spaceEvents', [
      'spaceEvents',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
    ]),
  },
  created () {
    this.fetchSpaceEvents();
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setSpaceEvents',
    ]),
    ...mapActions('spaceEvents', [
      'fetchSpaceEvents',
    ]),
  }
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

  }

</style>
