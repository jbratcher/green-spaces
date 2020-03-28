<template>
  <v-container class="py-0" fluid>
    <v-row>
      <v-col class="pa-0">

        <!-- Home Page Header Section -->
        <v-container id="hero" fluid class="pa-0">

          <!-- Hero Section -->
          <v-img alt="pine forest" src="hero.jpg" :aspect-ratio="16/9" gradient="rgba(0,150,136,0.5), rgba(0,105,92,0.5)" height="300px">
            <v-container>
              <v-row>
                <v-col class="mt-12 mb-6 text-center white--text">
                  <h1 :class="{'display-3 font-weight-bold text-shadow my-5': $breakpoint.mdAndUp, 'display-1 font-weight-bold text-shadow my-5': $breakpoint.smAndDown}">
                    Green Spaces
                  </h1>
                  <p :class="{'display-1 font-weight-regular text-shadow my-5': $breakpoint.mdAndUp, 'headline font-weight-regular text-shadow my-5': $breakpoint.smAndDown}">
                    Crowd-sourced Climate Action
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-img>

          <!-- Lead In Text -->
          <v-container>
            <v-row>
              <v-col>
                <v-card class="mx-auto" color="transparent" flat :width="$breakpoint.mdAndUp ? '65vw' : '90vw'">
                  <v-card-title :class="{'headline font-weight-bold my-5': $breakpoint.mdAndUp, 'title font-weight-bold my-5': $breakpoint.smAndDown}">
                    Green Spaces provides an all in one platform for combating climate change by planting trees to reduce carbon dioxide from the air.
                  </v-card-title>
                  <v-card-text class="body-1">
                      Your help is needed to save the world.  Help by donating or volunteer to plant trees.  Trees are still the best way to reduce atomospheric carbon dioxide which is the largest contributor to climate change.  Fund future technologies such as algae bioreactors while supporting easy, cost-effective solutions now.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      class="elevation-10 py-5 px-10 mt-5 mx-auto mb-10"
                      color="primary"
                      nuxt
                      rounded
                      to="/start"
                    >
                      Get involved
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

        </v-container>

        <!-- How It Works Section -->
        <v-container id="how-it-works" fluid>
          <v-row class="text-center gradient-overlay">
            <v-col>
              <h1 class="my-12">How It Works</h1>
              <v-container class="py-12 px-2">
                <v-row>
                  <v-col class="col-12 col-md-4">
                  <v-card class="py-12" height="100%">
                    <v-icon size="6rem" color="primary">mdi-currency-usd</v-icon>
                    <p :class="{'headline font-weight-regular pa-5': $breakpoint.mdAndUp, 'title font-weight-regular pa-5': $breakpoint.smAndDown}">People donate to purchase trees</p>
                  </v-card>
                  </v-col>
                  <v-col class="col-12 col-md-4">
                    <v-card class="py-12" height="100%">
                      <v-icon size="6rem" color="primary">mdi-face</v-icon>
                      <p :class="{'headline font-weight-regular pa-5': $breakpoint.mdAndUp, 'title font-weight-regular pa-5': $breakpoint.smAndDown}">People volunteer to plant trees</p>
                    </v-card>
                  </v-col>
                  <v-col class="col-12 col-md-4">
                    <v-card class="py-12" height="100%">
                      <v-icon size="6rem" color="primary">mdi-tree</v-icon>
                      <p :class="{'headline font-weight-regular pa-5': $breakpoint.mdAndUp, 'title font-weight-regular pa-5': $breakpoint.smAndDown}">Trees are planted to absorb CO2</p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>

        <!-- Donor Section -->
        <v-container id="donor" class=" my-12 py-12">
          <v-row>
            <v-col class="col-12 col-md-6 d-flex align-center justify-center">
              <v-btn
                :class="{'display-1 py-6 px-6': $breakpoint.mdAndUp, 'headline py-3 px-6': $breakpoint.smAndDown}"
                color="primary"
                nuxt
                to="/donate"
                x-large
              >
                Become a donor
              </v-btn>
            </v-col>
            <v-col class="col-12 col-md-6">
              <v-img
                src="donate.svg"
                alt="give trees"
                contain
              />
            </v-col>
          </v-row>
        </v-container>

        <!-- Volunteer Section -->
        <v-container id="volunteer" class="my-12 py-12">
          <v-row>
            <v-col class="col-12 col-md-6">
              <v-img
                src="volunteer.svg"
                alt="plant trees"
                contain
              />
            </v-col>
            <v-col class="col-12 col-md-6 d-flex align-center justify-center order-xs-first order-sm-last">
              <v-btn
                :class="{'display-1 py-6 px-6': $breakpoint.mdAndUp, 'headline py-3 px-6': $breakpoint.smAndDown}"
                color="primary"
                nuxt
                to="/volunteer"
                x-large
              >
                Become a volunteer
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
</style>
