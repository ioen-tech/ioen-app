<template>
  <v-slider
    v-model="value"
    step="10"
    thumb-label
    ticks
    hide-details
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(0)

    return { value }
  },
}
</script>
