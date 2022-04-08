<template>
  <v-slider
    v-model="slider"
    class="align-center"
    :max="max"
    :min="min"
    hide-details
  >
    <template #append>
      <v-text-field
        v-model="slider"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
      ></v-text-field>
    </template>
  </v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const min = ref(-50)
    const max = ref(90)
    const slider = ref(40)

    return { min, max, slider }
  },
}
</script>
