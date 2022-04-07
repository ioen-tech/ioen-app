<template>
  <div>
    <v-slider
      v-model="slider"
      thumb-label
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      thumb-label="always"
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      hide-details
    >
      <template #thumb-label="{ value }">
        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
      </template>
    </v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
    const slider = ref(45)

    return { satisfactionEmojis, slider }
  },
}
</script>
