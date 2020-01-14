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
      prominent
      height="70px"
    >
      <v-toolbar-title class="align-self-center d-flex align-center">
        <v-img class="invertColor" src="logo.svg" />
        <p class="toolbar-title-text">
          GreenSpaces
        </p>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up display-1" />
      <MenuLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
        list-class="row hidden-md-and-down"
        list-item-class="row-menu"
      />
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer
      class="teal"
      v-model="drawer"
      :mini-variant="miniVariant"
      disable-resize-watcher
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
      color="primary"
      class="pa-0"
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(link, i) in footerLinks"
          :key="i + link.title"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.title }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Green Spaces</strong>
        </v-col>
      </v-row>
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
      footerLinks: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About Us',
          to: '/'
        },
        {
          title: 'Team',
          to: '/'
        },
        {
          title: 'Services',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/'
        },
        {
          title: 'Contact Us',
          to: '/'
        },
      ],
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

  html, body {
    overflow-x: hidden;
  }

  .v-application ul {
    list-style-type: none;
    padding-left: 0;
  }

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

  .v-icon.notranslate.mdi.mdi-menu.theme--dark {
    font-size: 3rem;
    margin-top: 0.33rem;
    width: 3rem;
    height: 3rem;
  }

  .v-toolbar__title {

    .v-image {
      width: 35px;
      height: 35px;
    }

    .toolbar-title-text {
      font-size: 2.33rem;
      margin: auto 0 auto 0.5rem;
    }

  }

  .justify-space-evenly {
    justify-content: space-around;
    justify-content: space-evenly;
  }

  .gradient-overlay {
    background-image:
      linear-gradient(rgba(0,0,0,0.1),rgba(255,255,255,0.1)),
      linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),
      url("../static/how-it-works.jpg");
      background-position: center center;
  }

  .invertColor {
    filter: invert(1);
  }

  @media screen and (min-width: 768px) {

    .toolbar-title-text {
      font-size: 2.33rem;
    }

  }

</style>
