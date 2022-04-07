<template>
  <v-textarea
    clearable
    :clear-icon="icons.mdiCloseCircleOutline"
    label="Text"
    value="This is clearable text."
    hide-details
  ></v-textarea>
</template>

<script>
import { mdiCloseCircleOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCloseCircleOutline,
      },
    }
  },
}
</script>
