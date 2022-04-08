<template>
  <div>
    <v-btn
      color="primary"
      @click="isSnackbarVisibility = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarVisibility"
      :light="$vuetify.theme.dark"
    >
      Hello, I'm a snackbar with actions.

      <template #action="{ attrs }">
        <v-btn
          color="error"
          text
          v-bind="attrs"
          @click="isSnackbarVisibility = false"
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
    const isSnackbarVisibility = ref(false)

    return { isSnackbarVisibility }
  },
}
</script>
