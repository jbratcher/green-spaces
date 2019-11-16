<template>

  <v-sheet
    v-if="isLoggedIn"
    class="py-10 add-event-form"
  >
    <h3>Add a new event</h3>
    <v-sheet class="my-10 px-10">
      <v-form
        ref="form"
        v-model="valid"
        class="grid-2-1"
        lazy-validation
      >
        <v-text-field
          :value="newSpaceEventName"
          :counter="50"
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
        <v-sheet class="d-flex justify-space-evenly">
          <v-btn
            color="info btn-box-shadow-secondary"
            class="my-5"
            @click="reset"
          >
            Reset
          </v-btn>
          <v-btn
            color="primary"
            class="my-5 btn-box-shadow-primary"
            @click="createSpaceEvent"
          >
            Submit
          </v-btn>
        </v-sheet>
      </v-form>
    </v-sheet>
  </v-sheet>

</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'NewEventDialog',
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
    ]),
    ...mapState('auth', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setNewSpaceEventDescription',
      'setNewSpaceEventStart',
    ]),
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
    ]),
    reset () {
      this.$refs.form.reset();
    },
  }
}
</script>

<style>

</style>
