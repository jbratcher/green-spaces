<template>

  <v-list
    class="row pl-5"
  >
    <v-list-item
      v-for="(item, i) in generalLinks"
      :key="i"
      :to="item.to"
      class="column"
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
    <v-sheet
      v-if="!$auth.loggedIn"
      class="column w-100"
    >
      <v-list-item
        v-for="(item, i) in loggedOutLinks"
        :key="i"
        :to="item.to"
        class="row-menu"
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
    </v-sheet>
    <v-sheet
      v-if="$auth.loggedIn"
    >
      <v-list-item
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
    </v-sheet>
  </v-list>

</template>

<script>
export default {
  name: 'ColumnLinks',
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
  },
};
</script>

<style>

</style>
