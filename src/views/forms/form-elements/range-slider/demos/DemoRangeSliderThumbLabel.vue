<template>
  <v-range-slider
    :tick-labels="seasons"
    :value="[0, 1]"
    min="0"
    max="3"
    ticks="always"
    tick-size="4"
  >
    <template #thumb-label="props">
      <v-icon dark>
        {{ season(props.value) }}
      </v-icon>
    </template>
  </v-range-slider>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiSnowflake, mdiLeaf, mdiFire, mdiWater } from '@mdi/js'

export default {
  setup() {
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
    const icons = [mdiSnowflake, mdiLeaf, mdiFire, mdiWater]

    const season = value => icons[value]

    return { seasons, icons, season }
  },
}
</script>
