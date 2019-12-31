<template>
  <v-layout>
    <v-col>

      <v-card class="d-flex flex-column align-center mx-auto" width="80vw">

        <v-img
          :src="spaceEvent.image_source"
          lazy-src="https://picsum.photos/id/977/1280/920"
          width="1280"
          max-height="300"
        />

        <v-card-title class="display-1">
          {{ spaceEvent.name }}
        </v-card-title>

        <v-card-subtitle class="subtitle-1">
          {{ spaceEvent.start }}
        </v-card-subtitle>

        <v-card-title class="display-1">
          {{ spaceEvent.address_name }}
        </v-card-title>

        <v-card-title class="display-1">
          {{ spaceEvent.full_address }}
        </v-card-title>

        <v-card-text class="headline">
          {{ spaceEvent.description }}
        </v-card-text>

        <v-card-text class="volunteer-list">
          <h3>Volunteers RSVP'd</h3>
          <ul class="attendee-list">
            <li v-for="user in spaceEvent.attendees" :key="user.id">
              <v-avatar size="48">
                <v-img
                  :src="user.profile_image_source"
                />
              </v-avatar>
              <p>{{ user.full_name }}</p>
            </li>
          </ul>
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
    this.fetchSpaceEventById(this.$route.params.id);
    if (this.spaceEvent) {
      this.fetchSpaceEventAttendees(this.spaceEvent);
    }
  },
  methods: {
    ...mapActions('spaceEvents', [
      'fetchSpaceEventById',
      'fetchSpaceEventAttendees',
    ]),
  },
}
</script>

<style lang="scss">

  .volunteer-list {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    ul li {
      display: flex;
      align-items: center;
      .v-image {
        margin-right: 1rem;
      }
      p {
        margin-bottom: 0;
      }
    }
  }

</style>
