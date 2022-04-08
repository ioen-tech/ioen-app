<template>
  <v-autocomplete
    v-model="value"
    :items="items"
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const value = ref('foo')

    return { items, value }
  },
}
</script>
