<template>

  <v-container>
    <v-layout row wrap>
      <v-col xs6 offset-xs3>

        <h1>Login</h1>

        <v-text-field
          label="Email"
          placeholder="Email"
          :value="loginEmail"
          @input="setLoginEmail"
        />

        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="loginPassword"
          @input="setLoginPassword"
        />

        <v-alert type="error" :value="Boolean(loginError)">
          {{ loginError }}
        </v-alert>

        <v-btn dark @click="login">
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
