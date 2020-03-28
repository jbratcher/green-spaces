<template>
  <v-container>
    <v-row>
      <v-col class="mx-auto col-9 col-md-6 py-12">

        <!-- User Login Form -->
        <h1 :class="{'display-1 mb-12': $breakpoint.mdAndUp, 'headline mb-9': $breakpoint.smAndDown}">Login</h1>

        <v-text-field
          :value="loginEmail"
          @input="setLoginEmail"
          label="Email"
          placeholder="Email"
        />
        <v-text-field
          :value="loginPassword"
          @input="setLoginPassword"
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
        />
        <v-alert :value="Boolean(loginError)" type="error">
          {{ loginError }}
        </v-alert>
        <v-btn @click="login" dark>
          <v-icon class="mr-3">
            mdi-login
          </v-icon>
          Login
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
      'loggedIn',
      'loginEmail',
      'loginPassword',
      'loginError',
      'user'
    ]),
  },
  methods: {
    ...mapMutations('auth', [
      'setLoggedIn',
      'setLoginEmail',
      'setLoginPassword',
    ]),
    ...mapActions('auth', [
      'login',
    ]),
  },
};
</script>
