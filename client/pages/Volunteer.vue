<template>
  <v-layout>
    <v-flex class="text-center">

      <section class="container">

        <section class="mt-12">
          <h1 class="display-3 my-5">
            Give your time
          </h1>
          <p class="headline mb-12">
            Your time helps fight climate change
          </p>
          <v-btn x-large color="primary">
            Volunteer
          </v-btn>
        </section>

        <section class="calendar">
          <h2 class="display-1 my-5">
            Upcoming Events
          </h2>
          <p class="title mb-12">
            Find volunteer events near you
          </p>
          <v-sheet class="my-6" height="500">
            <v-calendar
              type="month"
              now="2019-06-11"
              value="2019-01-11"
              :events="events"
            />
          </v-sheet>
        </section>

      </section>

    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .calendar {
    margin-top: 15vh;
  }

</style>
