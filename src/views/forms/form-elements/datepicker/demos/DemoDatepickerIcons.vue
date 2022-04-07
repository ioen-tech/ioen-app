<template>
  <v-date-picker
    v-model="picker"
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
    const picker = new Date().toISOString().substr(0, 10)

    return {
      picker,

      // icons
      icons: {
        mdiCalendarBlank,
        mdiSkipPrevious,
        mdiSkipNext,
      },
    }
  },
}
</script>
