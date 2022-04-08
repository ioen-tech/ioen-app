<template>
  <div>
    <v-row align="center">
      <v-checkbox
        v-model="includeFiles"
        hide-details
        class="shrink me-2 mt-0"
      ></v-checkbox>
      <v-text-field label="Include files"></v-text-field>
    </v-row>
    <v-row align="center">
      <v-checkbox
        v-model="isInputEnabled"
        hide-details
        class="shrink me-2 mt-0"
      ></v-checkbox>
      <v-text-field
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      ></v-text-field>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const includeFiles = ref(true)
    const isInputEnabled = ref(false)

    return { includeFiles, isInputEnabled }
  },
}
</script>
