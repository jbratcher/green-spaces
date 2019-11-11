<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar
      app
      color="rgba(0, 121, 107, 0.8)"
      dark
      elevate-on-scroll
      fixed
      hide-on-scroll
      scroll-threshold="100"
      shrink-on-scroll
      prominent
      height="70px"
    >
      <v-toolbar-title class="headline align-self-center" v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <MenuLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
        list-class="row hidden-md-and-down"
        list-item-class="row-menu"
      />
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="teal"
      fixed
      dark
      app
      right
    >
      <MenuLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
        list-class="listClass"
        list-item-class="column"
      />
    </v-navigation-drawer>
    <!-- Nuxt content -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- Footer Area -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span class="ml-auto">Green Spaces &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import MenuLinks from '../components/MenuLinks.vue';

export default {
  components: {
    MenuLinks,
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

  .justify-space-evenly {
    justify-content: space-between;
    justify-content: space-evenly;
  }

  .gradient-overlay {
    background-image: linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),
      url("../static/how-it-works.jpg");
      background-position: center center;
  }

</style>
