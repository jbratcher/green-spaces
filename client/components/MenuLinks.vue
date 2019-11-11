<template>

  <v-list :class="listClass">
    <!-- General links -->
    <v-list-item
      v-for="(item, i) in generalLinks"
      :key="i + `-${item.title}`"
      :to="item.to"
      :class="listItemClass"
      dark
      router
      exact
    >
      <v-list-item-action>
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <!-- login/register links -->
    <v-list-item
      v-for="(item, j) in loggedOutLinks"
      :key="j + `-${item.title}`"
      :to="item.to"
      :class="listItemClass"
      router
      exact
    >
      <v-list-item-action>
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <!-- logout link -->
    <v-list-item
      v-if="$auth.loggedIn"
      :class="listItemClass"
      @click="logout"
    >
      <v-list-item-action>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MenuLinks',
  props: {
    'generalLinks': {
      type: Array,
      default() {
        return []
      },
    },
    'loggedOutLinks': {
      type: Array,
      default() {
        return []
      },
    },
    'listClass': {
      type: String,
      default: '',
    },
    'listItemClass': {
      type: String,
      default: '',
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('auth', [
      'logout',
      'setLoggedIn',
    ]),
  },
};
</script>

<style>

</style>
