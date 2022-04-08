<template>
  <v-slider
    v-model="value"
    step="10"
    hide-details
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(10)

    return { value }
  },
}
</script>
