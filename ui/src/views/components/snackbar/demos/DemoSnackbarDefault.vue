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
      :light="$vuetify.theme.dark"
    >
      Hello, I'm a snackbar
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
