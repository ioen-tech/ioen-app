<template>
  <v-file-input
    label="File input"
    filled
    :prepend-icon="icons.mdiCameraOutline"
    hide-details
  ></v-file-input>
</template>

<script>
import { mdiCameraOutline } from '@mdi/js'

export default {
  setup() {
    return { icons: { mdiCameraOutline } }
  },
}
</script>
