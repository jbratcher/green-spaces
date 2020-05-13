<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Calendar Header -->
        <v-sheet class="elevation-3" height="64">
          <v-toolbar flat color="white">
            <!-- Focus Current Date -->
            <v-btn @click="setToday" outlined class="mr-4">
              Today
            </v-btn>

            <!-- Prev/Next Month Buttons -->
            <v-btn @click="prev" fab text medium>
              <v-icon large>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn @click="next" fab text medium>
              <v-icon large>
                mdi-chevron-right
              </v-icon>
            </v-btn>

            <!-- Month Display -->
            <v-toolbar-title>{{ title }}</v-toolbar-title>
          </v-toolbar>
        </v-sheet>

        <!-- Calendar Content -->
        <v-calendar
          ref="calendar"
          v-model="focus"
          :events="spaceEvents"
          :event-margin-bottom="3"
          :now="today"
          @click:event="showEvent"
          @change="updateRange"
          color="primary"
          event-color="primary"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    date: new Date().toJSON(),
    startDateTime: new Date().toJSON(),
    endDateTime: new Date().toJSON(),
    end: null,
    focus: new Date().toISOString().substr(0, 10),
    start: null,
    today: new Date().toISOString().substr(0, 10),
    valid: true,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
    ],
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length <= 1000) ||
        "Description must be less than 1000 characters",
    ],
    addressNameRules: [
      (v) => !!v || "Address Name is required",
      (v) =>
        (v && v.length <= 1000) ||
        "Address Name must be less than 1000 characters",
    ],
    fullAddressRules: [
      (v) => !!v || "Full Address is required",
      (v) =>
        (v && v.length <= 1000) ||
        "Full Address must be less than 1000 characters",
    ],
    imageSourceRules: [
      (v) => !!v || "Image Source is required",
      (v) =>
        (v && v.length <= 1000) ||
        "Image Source must be less than 1000 characters",
    ],
  }),
  computed: {
    ...mapState("spaceEvents", [
      "newSpaceEventName",
      "newSpaceEventDescription",
      "newSpaceEventStart",
      "newSpaceEventEnd",
      "newSpaceEventAddressName",
      "newSpaceEventFullAddress",
      "newSpaceEventImageSource",
      "spaceEvents",
    ]),
    ...mapState(["isAuthenticated", "loggedInUser"]),
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const startYear = start.year;
      return `${startMonth} ${startYear}`;
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
  watch: {
    // workaround to set datetime of event, cannot use v-on handlers, watching v-model changes and passing formatted date to vuex mutation
    startDateTime() {
      const formatted = this.startDateTime.substr(0, 19).replace("T", " ");
      this.setUpdatedSpaceEventStart({
        selectedEvent: this.selectedEvent,
        start: formatted,
      });
    },
    endDateTime() {
      const formatted = this.endDateTime.substr(0, 19).replace("T", " ");
      this.setUpdatedSpaceEventEnd({
        selectedEvent: this.selectedEvent,
        end: formatted,
      });
    },
    // convert stored datetime format to tz datetime to match picker format
    selectedEvent() {
      this.startDateTime = this.toISOLocal(new Date(this.selectedEvent.start));
      this.endDateTime = this.toISOLocal(new Date(this.selectedEvent.end));
    },
  },
  created() {
    this.fetchSpaceEvents();
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    ...mapActions("spaceEvents", [
      "fetchSpaceEvents",
      "updateSpaceEvent",
      "updateSpaceEventAttendees",
      "deleteSpaceEvent",
    ]),
    ...mapMutations("spaceEvents", [
      "setUpdatedSpaceEventName",
      "setUpdatedSpaceEventDescription",
      "setUpdatedSpaceEventStart",
      "setUpdatedSpaceEventEnd",
      "setUpdatedSpaceEventAddressName",
      "setUpdatedSpaceEventFullAddress",
      "setUpdatedSpaceEventImageSource",
      "setSpaceEvent",
    ]),
    // converts a date to ISO w/o resetting time zone (https://stackoverflow.com/questions/49330139/date-toisostring-but-local-time-instead-of-utc)
    toISOLocal(date) {
      const z = (n) => ("0" + n).slice(-2);
      const zz = (n) => ("00" + n).slice(-3);
      return (
        date.getFullYear() +
        "-" +
        z(date.getMonth() + 1) +
        "-" +
        z(date.getDate()) +
        "T" +
        z(date.getHours()) +
        ":" +
        z(date.getMinutes()) +
        ":" +
        z(date.getSeconds()) +
        "." +
        zz(date.getMilliseconds()) +
        "Z"
      );
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      this.$router.push(`/events/${event.id}`);
      nativeEvent.stopPropagation();
    },
    toggleOpen(openBoolean) {
      this.selectedOpen = openBoolean;
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
  },
};
</script>

<style lang="scss"></style>
