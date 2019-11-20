<template>
  <!-- Dialog wrapper -->
  <div :key="event.id" class="text-center">
    <v-dialog
      :id="event.start"
      v-model="dialog"
      width="500"
      :activator="`div[data-date='${event.start}']`"
      hide-overlay
    >
      <!-- Event/Form Display  -->
      <v-card class="d-flex flex-column">

        <!-- Header -->
        <v-card-title
          class="headline primary white--text"
          primary-title
        >
          <h2
            v-if="!editMode"
          >
            {{ event.name }}
          </h2>
          <h2
            v-if="editMode"
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
        <!-- Body -->
        <v-card-text
          v-if="!editMode"
          class="mt-10"
          v-text="event.start"
        />
        <v-card-text
          v-if="!editMode"
          class="mb-5"
          v-text="event.description"
        />
        <!-- Edit Mode -->
        <v-text-field
          v-if="editMode"
          :value="event.name"
          :counter="50"
          :rules="nameRules"
          class="ma-5"
          label="Name"
          required
          @input="setUpdatedSpaceEventName({ event, name: $event })"
        />
        <v-textarea
          v-if="editMode"
          class="ma-5"
          :value="event.description"
          :rules="descriptionRules"
          :counter="1000"
          label="Description"
          name="Description"
          auto-grow
          required
          @input="setUpdatedSpaceEventDescription({ event, description: $event })"
        />
        <v-date-picker
          v-if="editMode"
          :value="event.start"
          :rules="startRules"
          color="primary"
          class="my-5"
          required
          @input="setUpdatedSpaceEventStart({ event, start: $event })"
        />
        <v-divider />
        <!-- Actions -->
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="!editMode && user.id === event.user_id"
            color="primary"
            @click="editMode = true"
          >
            Edit
          </v-btn>
          <v-btn
            v-if="editMode && user.id === event.user_id"
            color="info"
            @click="editMode = false"
          >
            Cancel
          </v-btn>
          <v-btn
            v-if="editMode"
            color="primary darken-2"
            @click="updateSpaceEvent(event)"
          >
            Save
          </v-btn>
          <v-btn
            v-if="editMode"
            color="error"
            @click="deleteSpaceEvent(event)"
          >
            Delete
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
      name: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
      id: {
        type: Number,
        default: null,
      },
    }
  },
  data: () => ({
    dialog: false,
    editMode: false,
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
      'user',
    ]),
  },
  methods: {
    ...mapMutations('spaceEvents', [
      'setUpdatedSpaceEventName',
      'setUpdatedSpaceEventDescription',
      'setUpdatedSpaceEventStart',
    ]),
    ...mapActions('spaceEvents', [
      'updateSpaceEvent',
      'deleteSpaceEvent',
    ]),
    reset () {
      this.dialog = false;
      this.editMode = false;
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
