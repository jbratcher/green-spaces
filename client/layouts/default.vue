<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar
      color="primary"
      dark
      elevate-on-scroll
      height="fit-content"
      hide-on-scroll
      scroll-threshold="200"
    >
      <v-toolbar-title class="d-flex align-self-center align-center">
        <v-img class="invertColor" alt="tree logo" src="/logo.svg" width="2rem" height="2rem" />
        <p class="headline my-auto ml-3">GreenSpaces</p>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up mr-3">
        <i aria-hidden="true" class="v-icon notranslate theme--dark">
          <v-icon>{{ menuIcon }}</v-icon>
        </i>
      </v-app-bar-nav-icon>
      <MenuLinks
        :general-links="generalLinks"
        :logged-out-links="loggedOutLinks"
        list-class="hidden-sm-and-down d-md-flex mr-3"
        list-item-class
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
    <v-footer color="primary lighten-2 " class="pa-0">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(link, i) in generalLinks"
          :key="i + link.title"
          :href="link.to"
          color="white"
          text
          rounded
          class="my-2"
        >{{ link.title }}</v-btn>
        <v-col class="primary py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Green Spaces</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import MenuLinks from "../components/MenuLinks.vue";
import {
  mdiAccountPlus,
  mdiApps,
  mdiLogin,
  mdiMenu,
  mdiPlayCircleOutline,
  mdiPlay
} from "@mdi/js";
export default {
  components: {
    MenuLinks
  },
  data() {
    return {
      menuIcon: mdiMenu,
      drawer: false,
      fixed: false,
      generalLinks: [
        {
          icon: mdiApps,
          title: "Welcome",
          to: "/"
        },
        {
          icon: mdiPlayCircleOutline,
          title: "Start",
          to: "/start"
        }
      ],
      loggedOutLinks: [
        {
          icon: mdiLogin,
          title: "Login",
          to: "/login"
        },
        {
          icon: mdiAccountPlus,
          title: "Register",
          to: "/register"
        }
      ],
      miniVariant: false,
      title: "Green Spaces"
    };
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 1rem; // fallback for older browsers
  font-size: calc(1vw + 1vh + 0.5vmin); // fluid typography
}

html,
body,
.v-application {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  word-break: keep-all;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  background: #eee;
  min-width: 100vw;
  overflow-x: hidden;
}

ul,
ol {
  list-style-type: none;
  padding-left: 0;
}

.v-application {
  ul,
  ol {
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  .v-card__title,
  .v-card__subtitle,
  .v-card__text {
    line-height: 1.5;
    word-break: keep-all;

    h1,
    h2,
    h3 {
      margin-bottom: 1rem;
    }

    p > a {
      color: #0d47a1;
    }

    p,
    p + p,
    ul {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  .v-card__text {
    pre {
      margin-bottom: 2rem;
      min-width: 100%;
      code {
        font-size: 0.75rem;
        max-width: 100%;
        min-width: 100%;
        padding: 1rem;
      }
      code:before {
        content: "";
      }
    }
  }
}

.v-application a {
  color: #fff;
}

.text-shadow {
  text-shadow: 2px 2px 4px #000;
  &-light {
    text-shadow: 1px 1px 2px #000;
  }
}

.justify-space-evenly {
  justify-content: space-around;
  justify-content: space-evenly;
}

.gradient-overlay {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url("../static/how-it-works.jpg");
  background-position: center center;
}

.invertColor {
  filter: invert(1);
}
</style>
