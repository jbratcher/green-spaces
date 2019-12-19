<template>
  <v-layout>
    <v-col class="pa-0">

      <!-- Home Page Header Section -->
      <v-container id="hero" fluid class="pa-0">

        <!-- Hero Section -->
        <v-img :aspect-ratio="16/9" height="300px" src="hero.jpg">
          <v-row align="center" class="lightbox white--text pa-2 fill-height">
            <v-col class="text-center">
              <h1 class="text-shadow my-5">
                GreenSpaces
              </h1>
              <p class="text-shadow">
                Crowd-sourced Climate Action
              </p>
            </v-col>
          </v-row>
        </v-img>

        <!-- Lead In Text -->
        <v-container class="lead-in">
          <v-card-title class="my-5">
            Green Spaces provides an all in one platform for combating climate change by planting trees to reduce carbon dioxide from the air.
          </v-card-title>
          <v-card-text>
            <p>
              Your help is needed to save the world.  Help by donating or volunteer to plant trees.  Trees are still the best way to reduce atomospheric carbon dioxide which is the largest contributor to climate change.  Fund future technologies such as algae bioreactors while supporting easy, cost-effective solutions now.
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              nuxt
              to="/start"
              class="btn-box-shadow-primary py-5 px-10 mt-5 mb-10"
            >
              Get involved
            </v-btn>
          </v-card-actions>
        </v-container>

      </v-container>

      <!-- How It Works Section -->
      <v-container id="how-it-works" fluid class="pa-0">
        <v-sheet
          class="text-center gradient-overlay py-12"
        >
          <h1 class="my-12">
            How It Works
          </h1>
          <v-container class="benefits-list py-12 px-2">
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-currency-usd
              </v-icon>
              <p class="py-5">
                People donate to purchase trees
              </p>
            </v-sheet>
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-face
              </v-icon>
              <p class="py-5">
                People volunteer to plant trees
              </p>
            </v-sheet>
            <v-sheet>
              <v-icon size="100px" color="primary">
                mdi-tree
              </v-icon>
              <p class="py-5">
                Trees are planted to absorb CO2
              </p>
            </v-sheet>
          </v-container>
        </v-sheet>
      </v-container>

      <!-- Donor Section -->
      <v-sheet id="donor">
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
      <v-sheet id="volunteer">
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

  #hero {

    h1 {
      font-size: 3rem;
      font-weight: 400;
    }

    p:first-of-type {
      font-size: 2rem;
      font-weight: 400;
    }

    .lead-in {

      .v-card__title {
        font-size: 1.33rem;
        font-weight: 400;
        line-height: 1;
      }

    }

  }

  #hero, #donor > .v-sheet, #volunteer > .v-sheet {

    .v-btn {
      padding: 1rem;
      width: 80vw;

      .v-btn__content {
        font-size: 1.5rem;
        padding: 0 1rem;
      }

    }

    .lead-in {

      .v-card__title {
        font-size: 1.33rem;
        font-weight: 400;
        line-height: 1.25;
      }

      p:first-of-type {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
      }

    }

  }

  #how-it-works {

    .v-sheet {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h1 {
      font-size: 3rem;
      font-weight: 300;
    }

    p {
      font-size: 1.33rem;
      font-weight: 400;
    }

    .benefits-list {
      display: flex;
      flex-direction: column;
      align-items: center;

      .v-sheet {
        background: transparent;
      }

  }

  }

  #donor > .v-sheet, #volunteer > .v-sheet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    justify-content: space-around;
    min-height: 80vh;

    .v-image {
      max-width: 75vw;
      max-height: 50vh;
    }

  }

  @media screen and (min-width: 768px) {

    #hero {

      h1 {
        font-size: 4rem;
        font-weight: 400;
      }

      p:first-of-type {
        font-size: 2.33rem;
        font-weight: 400;
      }

      .lead-in {

        .v-card__title {
          font-size: 2rem;
        }

        p:first-of-type {
          font-size: 1.67rem;
        }

      }

    }

    #hero, #donor > .v-sheet, #volunteer > .v-sheet {

      .v-btn {
        width: auto;

        .v-btn__content {
          font-size: 1.67rem;
        }

      }

    }

    #how-it-works {

      .benefits-list {
        flex-direction: row;
        justify-content: space-around;
        justify-content: space-between;
      }

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2rem;
        padding: 1rem;
      }

    }

    #donor > .v-sheet, #volunteer > .v-sheet {
      flex-direction: row;
      justify-content: space-around;
      justify-content: space-evenly;
      min-height: 400px;

      .v-image {
        max-width: 35vw;
        max-height: 300px;
      }

    }

    #volunteer > .v-sheet {
      flex-direction: row-reverse;
    }

  }

</style>
