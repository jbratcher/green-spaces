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
        <template v-for="event in spaceEvents">
          <div :key="event.id" class="text-center">
            <v-dialog
              :id="event.start"
              v-model="dialog[event.id]"
              width="500"
              :activator="`div[data-date='${event.start}']`"
              hide-overlay
            >
              <v-card>
                <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                  v-text="event.name"
                />
                <v-card-text
                  v-text="event.description"
                />
                <v-divider />
                <!-- <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    text
                    @click="!dialog[event.id]"
                  >
                    Exit
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-sheet>
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
    dialog: [],
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
    reset () {
      this.$refs.form.reset();
    },
  }
}
</script>

<style lang="scss">

  .grid-2-1 {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nam"
      "des"
      "cal"
      "btns";
    gap: 2rem 0;

      .v-text-field {
        grid-area: nam;
        margin-bottom: 3rem;
      }

      .v-textarea {
        grid-area: des;
      }

      .v-picker {
        grid-area: cal;
      }

      .v-sheet {
        grid-area: btns;
      }
  }

  @media screen and (min-width: 768px) {

    .grid-2-1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "nam cal"
        "des cal"
        "btns cal";
      gap: 2rem 4rem;
    }

    .add-event-form {
      width: 65vw;
    }

  }

</style>
