<template>

  <v-list
    class="hidden-sm-and-down row"
    color="transparent"
  >
    <v-list-item
      v-for="(item, i) in generalLinks"
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
    <v-sheet
      v-if="!$auth.loggedIn"
      class="row"
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
      class="row"
    >
      <v-list-item
        class="row-menu"
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
  name: 'RowLinks',
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
