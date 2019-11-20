<template>
  <v-layout>
    <v-col class="pa-0">

      <!-- Home Page Header Section -->
      <v-container fluid class="pa-0">

        <!-- Hero Section -->
        <v-img :aspect-ratio="16/9" height="300px" src="hero.jpg">
          <v-row align="center" class="lightbox white--text pa-2 fill-height">
            <v-col class="text-center">
              <h1 class="display-3 text-shadow my-5">
                GreenSpaces
              </h1>
              <p class="display-1 text-shadow">
                Crowd-sourced Climate Action
              </p>
            </v-col>
          </v-row>
        </v-img>

        <!-- Lead In Text -->
        <v-container>
          <v-card-title class="display-1 my-5">
            Green Spaces provides an all in one platform for combating climate change by planting trees to reduce carbon dioxide from the air.
          </v-card-title>
          <v-card-text>
            <p class="headline">
              Your help is needed to save the world.  Help by donating or volunteer to plant trees.  Trees are still the best way to reduce atomospheric carbon dioxide which is the largest contributor to climate change.  Fund future technologies such as algae bioreactors while supporting easy, cost-effective solutions now.
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              nuxt
              to="/start"
              class="headline btn-box-shadow-primary py-5 px-10 mt-5 mb-10"
            >
              Get involved
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-container>

      <!-- How It Works Section -->
      <v-container fluid class="pa-0">
        <v-sheet
          class="text-center gradient-overlay py-12 d-flex flex-column justify-center"
        >
          <h1 class="display-3 my-12">
            How It Works
          </h1>
          <v-container class="benefits-list py-12 px-2">
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-currency-usd
              </v-icon>
              <p class="headline py-5">
                People donate to purchase trees
              </p>
            </v-sheet>
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-face
              </v-icon>
              <p class="headline py-5">
                People volunteer to plant trees
              </p>
            </v-sheet>
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-tree
              </v-icon>
              <p class="headline py-5">
                Trees are planted to absorb CO2
              </p>
            </v-sheet>
          </v-container>
        </v-sheet>
      </v-container>

      <!-- Donor Section -->
      <v-sheet class="donor">
        <v-sheet class="py-10 text-center">
          <v-btn
            color="primary"
            nuxt
            to="/donate"
          >
            Become a donor
          </v-btn>
          <v-img
            src="donate.svg"
            alt="give trees"
            contain
          />
        </v-sheet>
      </v-sheet>

      <!-- Volunteer Section -->
      <v-sheet class="volunteer">
        <v-sheet class="py-10 text-center">
          <v-btn
            color="primary"
            nuxt
            to="/volunteer"
          >
            Become a volunteer
          </v-btn>
          <v-img
            src="volunteer.svg"
            alt="plant trees"
            contain
          />
        </v-sheet>
      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .benefits-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    .v-sheet {
      background: transparent;
    }

  }

  .donor > .v-sheet, .volunteer > .v-sheet {
    display: flex;
    flex-direction: column;
    align-items: center;

    .v-btn {
      margin: 2rem 0;
    }

    .v-image {
      max-width: 75vw;
      max-height: 50vh;
    }

  }

  @media screen and (min-width: 768px) {

    .benefits-list {
      flex-direction: row;
      justify-content: space-around;
      justify-content: space-between;
    }

    .donor > .v-sheet, .volunteer > .v-sheet {
      flex-direction: row;
      justify-content: space-around;
      justify-content: space-evenly;

      .v-image {
        max-width: 35vw;
        max-height: 300px;
      }

    }

    .volunteer > .v-sheet {
      flex-direction: row-reverse;
    }

  }

</style>
