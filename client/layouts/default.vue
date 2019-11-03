<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="teal"
      fixed
      app
      right
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="white--text"
          router
          exact
        >
          <v-list-item-action>
            <v-icon class="white--text">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="white--text"
      color="teal"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!-- Nuxt content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-play-circle-outline',
          title: 'Start',
          to: '/start'
        }
      ],
      miniVariant: false,
      title: 'Green Spaces'
    }
  }
}
</script>

<style lang="scss">

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #fff !important;
}

</style>
