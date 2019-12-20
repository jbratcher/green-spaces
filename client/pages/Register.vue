<template>

  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>

        <!-- User Sign Up Form -->
        <h1>Register</h1>

        <v-text-field
          :value="firstName"
          @input="setFirstName"
          label="First Name"
          placeholder="First Name"
        />
        <v-text-field
          :value="lastName"
          @input="setLastName"
          label="Last Name"
          placeholder="Last Name"
        />
        <v-text-field
          :value="registerEmail"
          @input="setRegisterEmail"
          label="Email"
          placeholder="Email"
        />
        <v-text-field
          :value="registerPassword"
          @input="setRegisterPassword"
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
        />
        <v-alert :value="registerError" type="error">
          {{ registerError }}
        </v-alert>
        <v-btn @click="register" dark>
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
      'firstName',
      'lastName',
      'loggedIn',
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('auth', [
      'setLoggedIn',
      'setFirstName',
      'setLastName',
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('auth', [
      'register',
    ]),
  },
};
</script>
