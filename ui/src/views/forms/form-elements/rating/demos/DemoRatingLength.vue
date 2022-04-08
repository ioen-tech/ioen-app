<template>
  <div>
    <v-slider
      v-model="length"
      min="1"
      max="7"
      label="Custom length"
    ></v-slider>

    <v-rating
      v-model="rating"
      :length="length"
      color="error"
      background-color="secondary"
    ></v-rating>

    <div>
      <span class="caption text-uppercase">model:</span>
      <span class="font-weight-bold">
        {{ rating }}
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const length = ref(5)
    const rating = ref(2)

    return {
      length,
      rating,
    }
  },
}
</script>
