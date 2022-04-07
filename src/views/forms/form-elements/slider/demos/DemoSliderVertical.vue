<template>
  <v-slider
    v-model="value"
    vertical
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
