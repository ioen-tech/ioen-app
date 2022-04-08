<template>
  <v-date-picker
    v-model="picker"
    type="month"
    :year-icon="icons.mdiCalendarBlank"
    :prev-icon="icons.mdiSkipPrevious"
    :next-icon="icons.mdiSkipNext"
    color="primary"
  ></v-date-picker>
</template>

<script>
import { mdiCalendarBlank, mdiSkipPrevious, mdiSkipNext } from '@mdi/js'

export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 7)

    return {
      picker,
      icons: {
        mdiCalendarBlank,
        mdiSkipPrevious,
        mdiSkipNext,
      },
    }
  },
}
</script>
