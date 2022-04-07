<template>
  <div>
    <v-btn
      color="primary"
      @click="isSnackbarVisible = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarVisible"
      :timeout="2000"
      :light="$vuetify.theme.dark"
    >
      My timeout is set to 2000.
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isSnackbarVisible = ref(false)

    return { isSnackbarVisible }
  },
}
</script>
