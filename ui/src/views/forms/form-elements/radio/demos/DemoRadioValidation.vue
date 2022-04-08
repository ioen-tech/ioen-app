<template>
  <v-radio-group
    v-model="radioGroup"
    class="mt-0"
    row
    :rules="rules"
  >
    <v-radio
      v-for="n in 3"
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
    const rules = [value => (value !== 3 ? true : 'Do not select the third one!')]

    return { radioGroup, rules }
  },
}
</script>
