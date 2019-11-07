<template>
  <v-layout>
    <v-flex>

      <v-card>
        <v-img :aspect-ratio="16/9" height="60vh" src="hero.jpg">
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
        <v-container>
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

    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
