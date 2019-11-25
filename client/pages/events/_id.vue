<template>
  <v-layout>
    <v-col>

      <v-card class="d-flex flex-column align-center mx-auto" width="80vw">

        <v-card-title class="display-1">
          {{ spaceEvent.name }}
        </v-card-title>

        <v-card-subtitle class="subtitle-1">
          {{ spaceEvent.start }}
        </v-card-subtitle>

        <v-card-text class="headline">
          {{ spaceEvent.description }}
        </v-card-text>

      </v-card>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({

  }),
  computed: {
    ...mapState('spaceEvents', [
      'spaceEvent',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
  },
  created() {
    this.fetchSpaceEventById();
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEventById',
    ]),
  },
}
</script>

<style>

</style>
