<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <custom-timeline></custom-timeline>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <custom-timeline-card></custom-timeline-card>
    </v-col>
    <v-col cols="12">
      <timeline-with-icons></timeline-with-icons>
    </v-col>
  </v-row>
</template>

<script>
import CustomTimeline from './CustomTimeline.vue'
import CustomTimelineCard from './CustomTimelineCard.vue'
import TimelineWithIcons from './TimelineWithIcons.vue'

export default {
  components: {
    CustomTimeline,
    CustomTimelineCard,
    TimelineWithIcons,
  },
}
</script>

<style>
</style>
