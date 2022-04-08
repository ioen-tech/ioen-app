<template>
  <v-select
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    hide-details
  ></v-select>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedOptions = ref([])
    const states = [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
    ]

    return { selectedOptions, states }
  },
}
</script>
