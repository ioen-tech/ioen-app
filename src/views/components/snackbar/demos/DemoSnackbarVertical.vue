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
      vertical
      :light="$vuetify.theme.dark"
    >
      Facere modi esse illo officia saepe dolorum libero velit architecto voluptates fugiat sint dignissimos at aliquam distinctio repudiandae, incidunt aspernatur dolor deserunt?
      <template #action="{ attrs }">
        <v-btn
          color="success"
          text
          v-bind="attrs"
          @click="isSnackbarVisible = false"
        >
          Undo
        </v-btn>
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
