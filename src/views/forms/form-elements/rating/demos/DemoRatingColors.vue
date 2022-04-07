<template>
  <div>
    <v-rating
      v-model="rating"
      background-color="primary"
      color="primary"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="secondary"
      color="secondary"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="success"
      color="success"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="info"
      color="info"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="warning"
      color="warning"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="error"
      color="error"
      large
    ></v-rating>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rating = ref(4)

    return {
      rating,
    }
  },
}
</script>
