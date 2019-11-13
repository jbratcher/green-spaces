<template>
  <v-layout>
    <v-col class="pa-0 text-center">

      <v-sheet color="primary lighten-2" class="white--text">
        <h1 class="display-3 pt-6 pb-3">
          Give your time
        </h1>
        <p class="headline pt-3 pb-6">
          Your time helps fight climate change
        </p>
      </v-sheet>

      <v-sheet class="py-10">
        <h2 class="display-1 py-5">
          Upcoming Events
        </h2>
        <p class="title pb-12">
          Find volunteer events near you
        </p>
        <v-sheet class="my-6 mx-auto" elevation="5" width="80vw" height="500">
          <v-calendar
            type="month"
            value="2019-11-01"
            :events="spaceEvents"
          />
        </v-sheet>
      </v-sheet>

      <v-sheet
        v-if="isLoggedIn"
        class="py-10 d-flex flex-column align-center"
        width="35vw"
      >
        <h3>Add a new event</h3>
        <v-sheet class="my-10" width="30vw">
          <v-form
            ref="form"
            v-model="valid"
            class="d-flex flex-column"
            lazy-validation
          >
            <v-text-field
              :value="newSpaceEventName"
              :counter="10"
              :rules="nameRules"
              class="my-5"
              label="Name"
              required
              @input="setNewSpaceEventName"
            />
            <v-textarea
              :value="newSpaceEventDescription"
              :rules="descriptionRules"
              :counter="1000"
              label="Description"
              name="Description"
              auto-grow
              required
              @input="setNewSpaceEventDescription"
            />
            <v-date-picker
              :value="newSpaceEventStart"
              :rules="startRules"
              color="primary"
              class="my-5"
              required
              @input="setNewSpaceEventStart"
            />
            <v-sheet>
              <v-btn
                color="info"
                class="my-5"
                @click="reset"
              >
                Reset
              </v-btn>
              <v-btn
                color="primary"
                class="my-5"
                @click="createSpaceEvent"
              >
                Submit
              </v-btn>
            </v-sheet>
          </v-form>
        </v-sheet>
      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    startRules: [
      v => !!v || 'Start Date is required'
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 1000) || 'Description must be less than 1000 characters',
    ],
  }),
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'newSpaceEventDescription',
      'newSpaceEventStart',
      'spaceEvents',
    ]),
    ...mapState('auth', [
      'isLoggedIn',
    ]),
  },
  created () {
    this.fetchSpaceEvents();
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setNewSpaceEventDescription',
      'setNewSpaceEventStart',
      'setSpaceEvents',
    ]),
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
      'fetchSpaceEvents',
    ]),
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    submit() {
      console.log('Form submitted');
    },
  }
}
</script>

<style lang="scss">

</style>
