<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref([])
    const nameRules = [v => !!v.length || 'Select at least one option.']

    return { items, values, nameRules }
  },
}
</script>
