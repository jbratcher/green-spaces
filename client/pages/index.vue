<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-10">
        <v-img :aspect-ratio="16/9" height="300px" src="hero.jpg">
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
        <v-card-title class="headline">
          Green Spaces provides an all in one platform for combating climate change by planting trees to reduce carbon dioxide from the air.
        </v-card-title>
        <v-card-text>
          <p>Your help is needed to literally save the world.  Help by donating or volunteer to plant trees.  Trees are still the best way to reduce atomospheric carbon dioxide which is the largest contributor to climate change.  Fund future technologies such as algae bioreactors.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/start"
          >
            Get involved
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .text-shadow {
    text-shadow: 2px 2px 4px #000;
  }

</style>
