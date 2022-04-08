<template>
  <div>
    <v-radio-group
      v-model="columnRadio"
      column
      class="mt-0"
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>

    <v-divider></v-divider>

    <v-radio-group
      v-model="rowRadio"
      row
      hide-details
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const columnRadio = ref('radio-1')
    const rowRadio = ref(null)

    return { columnRadio, rowRadio }
  },
}
</script>
