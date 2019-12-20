<template>
  <v-layout>
    <v-col>

      <v-card class="d-flex flex-column align-center mx-auto" width="80vw">

        <v-img
          :src="user.profile_image_source"
          lazy-src="https://picsum.photos/id/977/1280/920"
          width="1280"
          max-height="300"
        />

        <v-card-title class="display-1">
          {{ user.full_name }}
        </v-card-title>

        <v-card-subtitle class="subtitle-1">
          {{ user.id }}
        </v-card-subtitle>

        <v-card-title class="display-1">
          {{ user.email }}
        </v-card-title>

        <v-file-input
          :rules="profileImageRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Avatar"
        />

      </v-card>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    profileImageRules: [
      value => !value || value.size < 2000000 || 'Profile image size should be less than 2 MB!',
    ],
  }),
  computed: {
    ...mapState('auth', [
      'isLoggedIn',
      'user',
    ]),
  },
  created() {
    this.fetchUserById();
  },
  methods: {
    ...mapActions('auth', [
      'fetchUserById',
    ]),
  },
}
</script>

<style>

</style>
