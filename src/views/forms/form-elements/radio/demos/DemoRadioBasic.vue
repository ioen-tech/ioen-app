<template>
  <v-radio-group
    v-model="radioGroup"
    class="mt-0"
    hide-details
  >
    <v-radio
      v-for="n in 2"
      :key="n"
      :label="`Radio ${n}`"
      :value="n"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radioGroup = ref(1)

    return { radioGroup }
  },
}
</script>
