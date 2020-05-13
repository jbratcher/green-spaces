<template>
  <v-container>
    <v-row>
      <v-col class="mx-auto col-9 col-sm-4 py-12">
        <!-- User Login Form -->
        <h1
          :class="{
            'display-1 mb-12': $breakpoint.mdAndUp,
            'headline mb-9': $breakpoint.smAndDown
          }"
        >Login</h1>

        <v-text-field v-model="email" label="Email" placeholder="Email" />
        <v-text-field
          v-model="password"
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
        />
        <v-alert :value="Boolean(error)" type="error">{{ error }}</v-alert>
        <v-btn @click="login" dark>
          <v-icon class="mr-3">{{ loginIcon }}</v-icon>Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiLogin } from "@mdi/js";
export default {
  data() {
    return {
      loginIcon: mdiLogin,
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          this.$router.replace("/");
        })
        .catch(error => console.log(`Login Error: ${error}`));
    }
  }
};
</script>
