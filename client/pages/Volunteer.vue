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
        v-if="$auth.loggedIn"
        class="py-10"
      >
        <h3>Add a new event</h3>
        <v-sheet class="mx-auto my-10" width="60vw">
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="30"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            />
            <v-text-field
              v-model="start"
              :error-messages="startErrors"
              label="Date"
              required
              @input="$v.start.$touch()"
              @blur="$v.start.$touch()"
            />
            <v-text-field
              v-model="description"
              :error-messages="descriptionErrors"
              label="Description"
              required
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            />

            <v-btn class="mr-4" @click="submit">
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </form>
        </v-sheet>
      </v-sheet>

    </v-col>
  </v-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    start: { required, String },
    description: { required, String },
  },
  data: () => ({
    name: '',
    start: '',
    description: '',
  }),
  computed: {
    ...mapState('spaceEvents', [
      'newSpaceEventName',
      'spaceEvents',
    ]),
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) { return errors }
      !this.$v.name.maxLength && errors.push('Name must be at most 30 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    startErrors () {
      const errors = []
      if (!this.$v.start.$dirty) { return errors }
      !this.$v.start.start && errors.push('Must be valid date')
      !this.$v.start.required && errors.push('Date is required')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) { return errors }
      !this.$v.description.description && errors.push('Must enter a description')
      !this.$v.description.required && errors.push('Description is required')
      return errors
    },
  },
  created () {
    this.fetchSpaceEvents();
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setSpaceEvents',
    ]),
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
      'fetchSpaceEvents',
    ]),
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.start = ''
      this.description = ''
    },
  }
}
</script>

<style lang="scss">

</style>
