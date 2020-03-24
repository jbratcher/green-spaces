<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar
      app
      color="primary"
      dark
      elevate-on-scroll
      hide-on-scroll
      scroll-threshold="200"
    >
      <v-toolbar-title class="d-flex align-self-center align-center">
        <v-img class="invertColor" src="logo.svg" />
        <p class="toolbar-title-text">
          GreenSpaces
        </p>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />
      <MenuLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
        list-class="hidden-sm-and-down d-md-flex"
        list-item-class=""
      />
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="primary"
      app
      dark
      disable-resize-watcher
      fixed
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
      color="primary lighten-2 "
      class="pa-0"
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(link, i) in generalLinks"
          :key="i + link.title"
          :href="link.to"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.title }}
        </v-btn>
        <v-col
          class="primary py-4 text-center white--text"
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

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .v-card__title {
    word-break: break-word;
  }

  .v-application ul {
    list-style-type: none;
    padding-left: 0;
  }

  .v-application a {
    color: #fff !important;
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
    font-size: 2rem;
    margin-top: 0.33rem;
  }

  .v-toolbar__title {

    .v-image {
      width: 1.5rem;
      height: 1.5rem;
    }

    .toolbar-title-text {
      font-size: 1.67rem;
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

  @media screen and (min-width: 960px) {

    .v-toolbar__title {

      .v-image {
        width: 2rem;
        height: 2rem;
      }

      .toolbar-title-text {
        font-size: 2.33rem;
        margin: auto 0 auto 0.5rem;
      }

    }

  }

</style>
