<template>

  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>

        <!-- User Sign Up Form -->
        <h1>Register</h1>

        <v-text-field
          label="Email"
          placeholder="Email"
          :value="registerEmail"
          @input="setRegisterEmail"
        />
        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="registerPassword"
          @input="setRegisterPassword"
        />
        <v-alert type="error" :value="registerError">
          {{ registerError }}
        </v-alert>
        <v-btn dark @click="register">
          <v-icon class="mr-5">
            mdi-account-plus
          </v-icon>
          Register
        </v-btn>

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', [
      'loggedIn',
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('auth', [
      'setLoggedIn',
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('auth', [
      'register',
    ]),
  },
};
</script>
