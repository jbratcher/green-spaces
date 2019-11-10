<template>

  <v-list :class="listClass">
    <v-list-item
      v-for="(item, i) in generalLinks"
      :key="i"
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
    <v-list-item
      v-for="(item, j) in loggedOutLinks"
      :key="j"
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
export default {
  name: 'GeneralLinks',
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
};
</script>

<style>

</style>
