<template>
  <v-layout>
    <v-col class="pa-0 text-center">

      <v-sheet color="primary lighten-2" class="white--text">
        <h1 class="display-3 pt-6 pb-3">
          Give your time
        </h1>
        <p class="headline pt=3 pb-6">
          Your time helps fight climate change
        </p>
      </v-sheet>

      <v-sheet>
        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title pb-12">
          Find volunteer events near you
        </p>
        <v-sheet class="my-6 mx-auto" elevation="5" width="80vw" height="500">
          <v-calendar
            type="month"
            value="2019-11-01"
            :events="spaceEvents"
          />
        </v-sheet>
      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
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

</style>
