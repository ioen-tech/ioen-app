<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      v-model="checkboxOne"
      dense
      hide-details
      :label="`${checkboxOne.toString()}`"
    ></v-checkbox>

    <v-checkbox
      v-model="checkboxTwo"
      dense
      hide-details
      :label="`${checkboxTwo.toString()}`"
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkboxOne = ref(true)
    const checkboxTwo = ref(false)

    return { checkboxOne, checkboxTwo }
  },
}
</script>
