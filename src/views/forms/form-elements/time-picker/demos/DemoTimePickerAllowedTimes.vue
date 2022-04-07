<template>
  <v-time-picker
    v-model="time"
    :allowed-hours="allowedHours"
    :allowed-minutes="allowedMinutes"
    format="24hr"
    scrollable
    min="9:30"
    max="22:15"
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const time = ref('11:15')

    const allowedHours = value => value % 2
    const allowedMinutes = value => value >= 10 && value <= 50

    return {
      time,
      allowedHours,
      allowedMinutes,
    }
  },
}
</script>
