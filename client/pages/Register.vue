<template>
  <v-container>
    <v-row>
      <v-col class="mx-auto col-9 col-md-6 py-12">

        <!-- User Sign Up Form -->
        <h1 :class="{'display-1 mb-12': $breakpoint.mdAndUp, 'headline mb-9': $breakpoint.smAndDown}">Register</h1>

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
          <v-icon class="mr-3">
            mdi-account-plus
          </v-icon>
          Register
        </v-btn>

      </v-col>
    </v-row>
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
