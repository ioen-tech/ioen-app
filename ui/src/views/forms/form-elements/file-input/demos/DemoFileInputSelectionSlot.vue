<template>
  <v-file-input
    v-model="files"
    placeholder="Upload your documents"
    label="File input"
    multiple
    hide-details
  >
    <template #selection="{ text }">
      <v-chip
        small
        label
        outlined
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const files = ref([])

    return { files }
  },
}
</script>
