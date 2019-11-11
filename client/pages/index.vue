<template>
  <v-layout>
    <v-flex>

      <v-card>
        <v-img :aspect-ratio="16/9" height="100vh" src="hero.jpg">
          <v-row align="center" class="lightbox white--text pa-2 fill-height">
            <v-col class="text-center">
              <h1 class="display-3 text-shadow mb-5">
                GreenSpaces
              </h1>
              <p class="display-1 text-shadow">
                Crowd-sourced Climate Action
              </p>
            </v-col>
          </v-row>
        </v-img>
        <v-container fluid>
          <v-card-title class="display-1 my-10">
            Green Spaces provides an all in one platform for combating climate change by planting trees to reduce carbon dioxide from the air.
          </v-card-title>
          <v-card-text>
            <p class="heading">
              Your help is needed to save the world.  Help by donating or volunteer to plant trees.  Trees are still the best way to reduce atomospheric carbon dioxide which is the largest contributor to climate change.  Fund future technologies such as algae bioreactors.
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              nuxt
              to="/start"
              class="headline btn-box-shadow-primary"
            >
              Get involved
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>

      <v-container fluid>
        <v-card class="pb-10 text-center gradient-overlay" height="100vh">
          <h1 class="display-3 mb-5">
            How It Works
          </h1>
          <v-row class="justify-space-evenly">
            <v-col class="col-4">
              <v-icon x-large>
                mdi-currency-usd
              </v-icon>
              <p class="headline py-5">
                People donate to purchase land and trees
              </p>
            </v-col>
            <v-col class="col-4">
              <v-icon x-large>
                mdi-face
              </v-icon>
              <p class="headline py-5">
                People volunteer to plant trees
              </p>
            </v-col>
            <v-col class="col-4">
              <v-icon x-large>
                mdi-tree
              </v-icon>
              <p class="headline py-5">
                Trees are planted to absorb CO2
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-container>

      <v-sheet>
        <v-card class="py-10 text-center">
          <h1>Become a donor</h1>
        </v-card>
      </v-sheet>

      <v-sheet>
        <v-card class="py-10 text-center">
          <h1>Become a volunteer</h1>
        </v-card>
      </v-sheet>

    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
