<template>
  <div :key="event.id" class="text-center">
    <v-dialog
      :id="event.start"
      v-model="dialog"
      width="500"
      :activator="`div[data-date='${event.start}']`"
      hide-overlay
    >
      <v-card class="d-flex flex-column">
        <v-card-title
          class="headline primary white--text"
          primary-title
        >
          <h2
            v-if="!editEvent"
          >
            {{ event.name }}
          </h2>
          <h2
            v-if="editEvent"
          >
            Edit {{ event.name }}
          </h2>

          <v-icon
            dark
            @click="reset"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <v-card-text
          v-if="!editEvent"
          class="mt-10"
          v-text="event.start"
        />
        <v-card-text
          v-if="!editEvent"
          class="mb-5"
          v-text="event.description"
        />
        <!-- Edit Mode -->
        <v-text-field
          v-if="editEvent"
          :value="event.name"
          :counter="50"
          :rules="nameRules"
          class="ma-5"
          label="Name"
          required
          @input="setNewSpaceEventName"
        />
        <v-textarea
          v-if="editEvent"
          class="ma-5"
          :value="event.description"
          :rules="descriptionRules"
          :counter="1000"
          label="Description"
          name="Description"
          auto-grow
          required
          @input="setNewSpaceEventDescription"
        />
        <v-date-picker
          v-if="editEvent"
          :value="event.start"
          :rules="startRules"
          color="primary"
          class="my-5"
          required
          @input="setNewSpaceEventStart"
        />
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="editEvent = true"
          >
            Edit
          </v-btn>
          <v-btn
            v-if="editEvent"
            color="primary darken-2"
            @click="updateSpaceEvent(event)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'SpaceEventDialog',
  props: {
    event: {
      type: Object,
      default: () => {},
    }
  },
  data: () => ({
    dialog: false,
    editEvent: false,
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
      'updateSpaceEvent',
    ]),
    reset () {
      this.dialog = false;
      this.editEvent = false;
    },
  }
}
</script>

<style lang="scss">

  .v-card__title {
    justify-content: space-between;
  }

  .v-picker {
    margin: 1rem auto;
  }

</style>
