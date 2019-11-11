<template>
  <v-layout>
    <v-flex>

      <v-container fluid class="pa-0">
        <v-img :aspect-ratio="16/9" height="50vh" src="hero.jpg">
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
              class="headline btn-box-shadow-primary mt-5 mb-10"
            >
              Get involved
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-container>

      <v-container fluid class="pa-0">
        <v-card class="text-center gradient-overlay" height="100vh">
          <h1 class="display-3 pt-10 pb-5">
            How It Works
          </h1>
          <v-container>
            <v-row class="justify-space-evenly mt-10">
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
          </v-container>
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
