<template>
  <v-layout>
    <v-flex class="text-center">

      <section class="container">

        <h1 class="display-3 my-12">
          How to get started
        </h1>

        <div class="my-12">

          <v-btn
            class="mx-10 btn-box-shadow-primary"
            color="primary"
            x-large
            nuxt
            to="/donate"
          >
            Donate
          </v-btn>
          <v-btn
            class="mx-10 btn-box-shadow-secondary"
            color="info"
            x-large
            nuxt
            to="/volunteer"
          >
            Volunteer
          </v-btn>
        </div>

      </section>

    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
