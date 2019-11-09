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
          v-for="(item, i) in loggedOutLinks"
          :key="i"
          :to="item.to"
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="rgba(0, 121, 107, 0.8)"
      app
      dark
      fixed
      class="box-shadow-1"
    >
      <v-toolbar-title class="headline" v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <v-list
        v-if="!$auth.loggedIn"
        class="hidden-sm-and-down row"
        color="transparent"
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
      </v-list>
      <v-list
        v-if="$auth.loggedIn"
        class="hidden-sm-and-down row"
        color="transparent"
      >
        <v-list-item
          v-for="(item, i) in loggedInLinks"
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
      </v-list>
      <v-list
        v-if="$auth.loggedIn"
        class="hidden-sm-and-down row"
        color="transparent"
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
      </v-list>
    </v-app-bar>
    <!-- Nuxt content -->
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span class="ml-auto">Green Spaces &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      loggedOutLinks: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-play-circle-outline',
          title: 'Start',
          to: '/start'
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/login'
        },
        {
          icon: 'mdi-account-plus',
          title: 'Register',
          to: '/register'
        }
      ],
      loggedInLinks: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-play-circle-outline',
          title: 'Start',
          to: '/start'
        },
      ],
      miniVariant: false,
      title: 'Green Spaces'
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
}
</script>

<style lang="scss">

  .v-application a {
    color: #fff !important;
  }

  .v-list-item.row-menu {
    flex: 1 1 0;
  }

  .v-card__title {
    word-break: break-word;
  }

  .text-shadow {
    text-shadow: 2px 2px 4px #000;
  }

  .heading {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .box-shadow-1 {
    box-shadow: 0 4px 8px rgba(0,0,0,0.7);
  }

  .theme--dark.v-sheet {
    background-color: transparent;
  }

  .btn-box-shadow-primary {
    box-shadow: 0 0 8px rgba(0, 121, 107, 0.8);

    &:hover {
      box-shadow: none;
      transition: all 0.5s ease;
    }

  }

  .btn-box-shadow-secondary {

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);

    &:hover {
      box-shadow: none;
      transition: all 0.5s ease;
    }

  }

</style>
