<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="teal"
      fixed
      dark
      app
      right
    >
      <ColumnLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
      />
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
      <RowLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
      />
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
import ColumnLinks from '../components/ColumnLinks.vue';
import RowLinks from '../components/RowLinks.vue';

export default {
  components: {
    ColumnLinks,
    RowLinks,
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      generalLinks: [
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
      loggedOutLinks: [
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

  .w-100 {
    width: 100%;
  }

</style>
