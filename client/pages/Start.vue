<template>
  <v-layout>
    <v-col cols="12" class="pa-0 text-center">

      <!-- Page Header -->
      <h1 class="display-3 my-12">
        How to get started
      </h1>

      <!-- Main Content -->
      <v-sheet
        class="my-12 py-12 start-options"
      >

        <!-- Donate Path -->
        <v-sheet
          color="primary lighten-2 ma-5 pa-5 d-flex flex-column align-center justify-space-evenly"
          elevation="10"
        >
          <v-btn
            class="btn-box-shadow-primary pa-5 my-12"
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

        <!-- Volunteer Path -->
        <v-sheet
          color="primary lighten-4 ma-5 pa-5 d-flex flex-column align-center justify-space-evenly"
          elevation="10"
        >
          <v-btn
            class="btn-box-shadow-secondary pa-5 my-12"
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

  .start-options {
    display: flex;
    flex-direction: column;

    &>.v-sheet {
      min-width: 80vw;
    }
  }

  @media screen and (min-width: 768px) {
    .start-options {
      flex-direction: row;
      justify-content: space-around;
      justify-content: space-evenly;

      &>.v-sheet {
        min-width: unset;
      }

    }
  }

</style>
