/* eslint-disable */
<template>
  <!-- Links Wrapper -->
  <v-list :class="listClass" color="primary">
    <!-- General links -->
    <v-list-item
      v-for="(item, i) in generalLinks"
      :key="i + `-${item.title}`"
      :to="item.to"
      :class="listItemClass"
      router
      exact
    >
      <v-list-item-action class="mr-2">
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>

    <!-- login/register links -->
    <template v-if="!isAuthenticated">
      <v-list-item
        v-for="(item, j) in loggedOutLinks"
        :key="j + `-${item.title}`"
        :to="item.to"
        :class="listItemClass"
        router
        exact
      >
        <v-list-item-action class="mr-2">
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </template>

    <!-- logout link -->
    <v-list-item v-if="isAuthenticated" :class="listItemClass" @click="logout">
      <v-list-item-action class="mr-2">
        <v-icon>
          {{ logoutIcon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- Profile link -->
    <v-list-item
      v-if="isAuthenticated && loggedInUser"
      :to="`/users/${loggedInUser.id}`"
      :class="listItemClass"
      dark
      router
      exact
    >
      <v-list-item-action class="mr-2">
        <v-icon>
          {{ accountIcon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          Profile
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiAccount, mdiLogout } from "@mdi/js";
export default {
  name: "MenuLinks",
  props: {
    generalLinks: {
      type: Array,
      default() {
        return [];
      },
    },
    loggedOutLinks: {
      type: Array,
      default() {
        return [];
      },
    },
    listClass: {
      type: String,
      default: "",
    },
    listItemClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  data() {
    return {
      accountIcon: mdiAccount,
      logoutIcon: mdiLogout,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
