<template>
  <div>
    <v-range-slider
      v-model="values"
      disabled
      value="30"
      label="Disabled"
    ></v-range-slider>

    <v-range-slider
      v-model="values"
      readonly
      label="Readonly"
      hide-details
    ></v-range-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([30, 60])

    return { values }
  },
}
</script>
