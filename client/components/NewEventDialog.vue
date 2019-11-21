<template>

  <!-- Dialog Wrapper -->
  <v-dialog
    v-if="isLoggedIn"
    v-model="menuOpen"
    class="pa-10"
    activator=".add-new-event"
  >
    <v-sheet class="pa-10 d-flex flex-column">

      <!-- Dialog Header -->
      <v-icon class="align-self-end" @click="menuOpen = false">
        mdi-close
      </v-icon>
      <h3>Add a new event</h3>

      <!-- Event Form -->
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

        <!-- Form Actions -->
        <v-sheet class="d-flex justify-space-evenly">
          <v-btn
            color="info btn-box-shadow-secondary"
            class="my-5"
            @click="resetCreateEventForm"
          >
            Reset
          </v-btn>
          <v-btn
            color="primary"
            class="my-5 btn-box-shadow-primary"
            @click="createEvent"
          >
            Submit
          </v-btn>
        </v-sheet>
      </v-form>

    </v-sheet>
  </v-dialog>

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
    menuOpen: false,
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
  methods: {
    ...mapMutations('spaceEvents', [
      'setNewSpaceEventName',
      'setNewSpaceEventDescription',
      'setNewSpaceEventStart',
    ]),
    ...mapActions('spaceEvents', [
      'createSpaceEvent',
    ]),
    createEvent () {
      this.createSpaceEvent();
      this.resetCreateEventForm();
    },
    resetCreateEventForm () {
      this.$refs.form.reset();
      this.menuOpen = false;
    },
  }
}
</script>

<style lang="scss">

.v-dialog {
  width: 80vw;
}

@media screen and (min-width: 768px) {
  .v-dialog {
    width: 65vw;
  }
}

</style>
