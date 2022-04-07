<template>
  <v-slider
    v-model="value"
    :rules="rules"
    label="How many?"
    step="10"
    thumb-label="always"
    ticks
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(30)
    const rules = [v => v <= 40 || 'Only 40 in stock']

    return { value, rules }
  },
}
</script>
