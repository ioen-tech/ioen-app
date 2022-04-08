<template>
  <div>
    <v-rating
      v-model="rating"
      background-color="primary"
      color="primary"
      small
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="secondary"
      color="secondary"
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="success"
      color="success"
      medium
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
      x-large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="error"
      color="error"
      size="64"
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
