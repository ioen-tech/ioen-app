<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    label="Multiple"
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
