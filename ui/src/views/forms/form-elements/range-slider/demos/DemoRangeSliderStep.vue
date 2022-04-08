<template>
  <v-range-slider
    v-model="values"
    step="10"
    hide-details
  ></v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([20, 40])

    return { values }
  },
}
</script>
