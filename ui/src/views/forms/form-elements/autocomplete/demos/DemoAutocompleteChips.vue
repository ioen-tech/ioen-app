<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    outlined
    chips
    hide-details
    small-chips
    label="Chips"
    multiple
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref(['foo', 'bar'])

    return { items, values }
  },
}
</script>
