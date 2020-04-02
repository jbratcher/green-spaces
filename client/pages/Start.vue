<template>
  <v-container>
    <v-row>
      <v-col class="pa-0 text-center">

        <!-- Page Header -->
        <h1 class="display-3 mt-6 py-12">
          How to get started
        </h1>

        <!-- Main Content -->
        <v-container class="pt-9 pb-12">
          <v-row>

            <!-- Donate Path -->
            <v-col sm="6">
              <v-sheet class="pb-12" color="primary lighten-4">
                <v-btn
                  class="elevation-10 pa-5 my-12"
                  color="primary"
                  x-large
                  nuxt
                  to="/donate"
                >
                  Donate
                </v-btn>
                <v-img
                  src="donate.svg"
                  alt="plant trees"
                  max-height="200px"
                  contain
                />
              </v-sheet>
            </v-col>

            <!-- Volunteer Path -->
            <v-col sm="6">
              <v-sheet class="pb-12" color="primary lighten-2">
                <v-btn
                  class="elevation-10 pa-5 my-12"
                  color="info"
                  x-large
                  nuxt
                  to="/volunteer"
                >
                  Volunteer
                </v-btn>
                <v-img
                  src="volunteer.svg"
                  alt="plant trees"
                  max-height="200px"
                  contain
                />
              </v-sheet>
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
