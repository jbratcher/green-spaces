<template>
  <v-layout>
    <v-col>

      <v-card>

        <h1 class="display-1">
          {{ spaceEvent.name }}
        </h1>

        <p class="subtitle-1">
          {{ spaceEvent.description }}
        </p>

        <p class="headline">
          {{ spaceEvent.description }}
        </p>

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
