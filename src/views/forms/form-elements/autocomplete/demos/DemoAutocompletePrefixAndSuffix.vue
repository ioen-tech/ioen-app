<template>
  <v-autocomplete
    v-model="value"
    :items="items"
    prefix="$"
    suffix="Donate"
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = [5, 10, 15, 50, 150, 200]
    const value = ref(5)

    return { items, value }
  },
}
</script>
