<template>
  <div class="demo-space-x">
    <!-- fade -->
    <v-btn
      color="primary"
      @click="isSnackbarFadeVisible = true"
    >
      fade snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarFadeVisible"
      :light="$vuetify.theme.dark"
      transition="fade-transition"
      left
    >
      I'm a fade transition snackbar.
    </v-snackbar>

    <!-- scale -->
    <v-btn
      color="primary"
      @click="isSnackbarScaleVisible = true"
    >
      Scale snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarScaleVisible"
      :light="$vuetify.theme.dark"
      transition="scale-transition"
    >
      I'm a scale transition snackbar.
    </v-snackbar>

    <!-- scroll y reverse -->
    <v-btn
      color="primary"
      @click="isSnackbarScrollReveseVisible = true"
    >
      scroll y reverse snackbar
    </v-btn>

    <v-snackbar
      v-model="isSnackbarScrollReveseVisible"
      :light="$vuetify.theme.dark"
      transition="scroll-y-reverse-transition"
      right
    >
      I'm a scroll y reverse transition snackbar.
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isSnackbarFadeVisible = ref(false)
    const isSnackbarScaleVisible = ref(false)
    const isSnackbarScrollReveseVisible = ref(false)

    return { isSnackbarFadeVisible, isSnackbarScaleVisible, isSnackbarScrollReveseVisible }
  },
}
</script>
