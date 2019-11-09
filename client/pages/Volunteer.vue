<template>
  <v-layout>
    <v-flex class="text-center">

      <section class="container">

        <section class="mt-12">
          <h1 class="display-3 my-5">
            Give your time
          </h1>
          <p class="headline mb-12">
            Your time helps fight climate change
          </p>
          <v-btn x-large class="btn-box-shadow-primary" color="primary">
            Volunteer
          </v-btn>
        </section>

        <section class="calendar">
          <h2 class="display-1 my-5">
            Upcoming Events
          </h2>
          <p class="title mb-12">
            Find volunteer events near you
          </p>
          <v-sheet class="my-6" height="500">
            <v-calendar
              type="month"
              value="2019-11-01"
              :events="spaceEvents"
            />
          </v-sheet>
        </section>

      </section>

    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  middleware: 'auth',
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'spaceEvents',
    ]),
  },
  created () {
    this.fetchSpaceEvents();
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setSpaceEvents',
    ]),
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
      'fetchSpaceEvents',
    ]),
  }
}
</script>

<style lang="scss">

  .calendar {
    margin-top: 15vh;
  }

</style>
