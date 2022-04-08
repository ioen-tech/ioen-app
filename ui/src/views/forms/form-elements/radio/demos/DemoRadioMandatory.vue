<template>
  <v-radio-group
    v-model="radios"
    mandatory
    hide-details
    class="mt-0"
  >
    <v-radio
      label="Radio 1"
      value="radio-1"
    ></v-radio>
    <v-radio
      label="Radio 2"
      value="radio-2"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radios = ref(null)

    return { radios }
  },
}
</script>
