<template>
  <v-range-slider
    v-model="range"
    :max="max"
    :min="min"
    hide-details
    class="align-center"
  >
    <template #prepend>
      <v-text-field
        :value="range[0]"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 0, $event)"
      ></v-text-field>
    </template>
    <template #append>
      <v-text-field
        :value="range[1]"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 1, $event)"
      ></v-text-field>
    </template>
  </v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const min = ref(-50)
    const max = ref(90)
    const range = ref([-20, 70])

    return { min, max, range }
  },
}
</script>
