<template>

  <v-container>
    <v-layout row wrap>
      <v-col xs6 offset-xs3>

        <!-- User Login Form -->
        <h1>Login</h1>

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
          <v-icon class="mr-5">
            mdi-login
          </v-icon>
          Login
        </v-btn>

      </v-col>
    </v-layout>
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
