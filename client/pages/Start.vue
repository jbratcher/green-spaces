<template>
  <v-layout>
    <v-col cols="12" class="pa-0 text-center">

      <h1 class="display-3 my-10">
        How to get started
      </h1>
      <v-sheet
        class="my-15 d-flex justify-space-evenly"
        height="500px"
      >
        <v-sheet
          color="primary lighten-2 d-flex flex-column align-center justify-space-evenly"
          width="100%"
          height="100%"
        >
          <v-btn
            class="btn-box-shadow-primary"
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
            max-width="35vw"
            max-height="200px"
            contain
          />
        </v-sheet>
        <v-sheet
          color="primary lighten-4 d-flex flex-column align-center justify-space-evenly"
          width="100%"
          height="100%"
        >
          <v-btn
            class="btn-box-shadow-secondary"
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
            max-width="35vw"
            max-height="200px"
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

</style>
