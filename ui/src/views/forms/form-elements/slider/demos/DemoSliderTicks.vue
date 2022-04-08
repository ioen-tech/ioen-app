<template>
  <div>
    <v-slider
      v-model="value"
      step="10"
      ticks
      hint="Show ticks when using slider"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="value"
      step="10"
      ticks="always"
      hint="Always show ticks"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="value"
      step="10"
      ticks="always"
      tick-size="4"
      hint="Tick size"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="fruits"
      :tick-labels="ticksLabels"
      :max="3"
      step="1"
      ticks="always"
      tick-size="4"
    ></v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(0)
    const fruits = ref(0)
    const ticksLabels = ['Figs', 'Lemon', 'Pear', 'Apple']

    return { value, fruits, ticksLabels }
  },
}
</script>
