<template>
  <div>
    <v-combobox
      v-model="select"
      :items="items"
      multiple
      solo
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      multiple
      outlined
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      multiple
      filled
      hide-details
    ></v-combobox>
  </div>
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
