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
      multi-line
      :light="$vuetify.theme.dark"
    >
      I'm a multi-line snackbar.

      <template #action="{ attrs }">
        <v-btn
          color="error"
          text
          v-bind="attrs"
          @click="isSnackbarVisible = false"
        >
          Close
        </v-btn>
      </template>
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
