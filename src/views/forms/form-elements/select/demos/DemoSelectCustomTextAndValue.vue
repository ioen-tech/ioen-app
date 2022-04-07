<template>
  <v-select
    v-model="selectedOption"
    :hint="`${selectedOption.state}, ${selectedOption.abbr}`"
    :items="items"
    item-text="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  ></v-select>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

    const items = [
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ]

    return { selectedOption, items }
  },
}
</script>
