<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  ></v-combobox>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const select = ref(['Vuetify', 'Programming'])
    const items = ['Programming', 'Design', 'Vue', 'Vuetify']

    return { select, items }
  },
}
</script>
