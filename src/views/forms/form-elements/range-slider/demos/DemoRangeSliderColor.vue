<template>
  <v-range-slider
    v-model="values"
    color="success"
    track-color="secondary"
    hide-details
  ></v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([10, 60])

    return { values }
  },
}
</script>
