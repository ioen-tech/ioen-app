<template>
  <v-rating
    v-model="rating"
    color="warning"
    background-color="warning"
    half-increments
    hover
  ></v-rating>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rating = ref(4.5)

    return {
      rating,
    }
  },
}
</script>
