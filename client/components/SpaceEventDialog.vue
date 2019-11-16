<template>
  <div :key="event.id" class="text-center">
    <v-dialog
      :id="event.start"
      v-model="dialog"
      width="500"
      :activator="`div[data-date='${event.start}']`"
      hide-overlay
    >
      <v-card>
        <v-card-title
          class="headline primary white--text"
          primary-title
          v-text="event.name"
        />
        <v-card-text
          class="mt-10"
          v-text="event.start"
        />
        <v-card-text
          class="mb-5"
          v-text="event.description"
        />
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
  }),
}
</script>

<style>

</style>
