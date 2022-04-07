<template>
  <div class="d-flex demo-space-x">
    <v-checkbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="`${checkbox.toString()}`"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="checkboxString"
      true-value="show"
      false-value="hide"
      color="success"
      :label="`${checkboxString.toString()}`"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkbox = ref(1)
    const checkboxString = ref('show')

    return { checkbox, checkboxString }
  },
}
</script>
