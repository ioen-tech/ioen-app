<template>
  <div class="demo-space-x">
    <!-- top  -->
    <v-btn
      color="primary"
      icon
      @click="isSnackbarTopVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowUp }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopVisible"
      :light="$vuetify.theme.dark"
      top
    >
      I'm a top snackbar.
    </v-snackbar>

    <!-- top right -->
    <v-btn
      color="primary"
      icon
      @click="isSnackbarTopRightVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowTopRight }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopRightVisible"
      :light="$vuetify.theme.dark"
      right
      top
    >
      I'm a top right snackbar.
    </v-snackbar>

    <!-- center right-->
    <v-btn
      icon
      color="primary"
      @click="isSnackbarRightVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowRight }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarRightVisible"
      :light="$vuetify.theme.dark"
      right
      centered
    >
      I'm a center right snackbar.
    </v-snackbar>

    <!-- bottom right-->
    <v-btn
      color="primary"
      icon
      @click="isSnackbarBottomRightVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowBottomRight }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomRightVisible"
      :light="$vuetify.theme.dark"
      right
    >
      I'm a bottom right snackbar.
    </v-snackbar>

    <!-- bottom -->
    <v-btn
      color="primary"
      icon
      @click="isSnackbarBottomVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowDown }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomVisible"
      :light="$vuetify.theme.dark"
    >
      I'm a bottom snackbar.
    </v-snackbar>

    <!-- bottom left-->
    <v-btn
      icon
      color="primary"
      @click="isSnackbarBottomLeftVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowBottomLeft }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarBottomLeftVisible"
      :light="$vuetify.theme.dark"
      left
    >
      I'm a bottom left snackbar.
    </v-snackbar>

    <!-- center left-->
    <v-btn
      icon
      color="primary"
      @click="isSnackbarLeftVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowLeft }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarLeftVisible"
      :light="$vuetify.theme.dark"
      centered
      left
    >
      I'm a center left snackbar.
    </v-snackbar>

    <!-- top left-->
    <v-btn
      color="primary"
      icon
      @click="isSnackbarTopLeftVisible = true"
    >
      <v-icon>{{ icons.mdiArrowTopLeft }}</v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarTopLeftVisible"
      :light="$vuetify.theme.dark"
      top
      left
    >
      I'm a top left snackbar.
    </v-snackbar>

    <!-- center -->
    <v-btn
      icon
      color="primary"
      @click="isSnackbarCenteredVisible = true"
    >
      <v-icon>
        {{ icons.mdiArrowCollapseAll }}
      </v-icon>
    </v-btn>

    <v-snackbar
      v-model="isSnackbarCenteredVisible"
      :light="$vuetify.theme.dark"
      centered
    >
      I'm a center right snackbar.
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiArrowTopLeft,
  mdiArrowUp,
  mdiArrowTopRight,
  mdiArrowBottomRight,
  mdiArrowDown,
  mdiArrowBottomLeft,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowCollapseAll,
} from '@mdi/js'

export default {
  setup() {
    const isSnackbarTopLeftVisible = ref(false)
    const isSnackbarTopVisible = ref(false)
    const isSnackbarTopRightVisible = ref(false)
    const isSnackbarBottomRightVisible = ref(false)
    const isSnackbarBottomVisible = ref(false)
    const isSnackbarBottomLeftVisible = ref(false)
    const isSnackbarRightVisible = ref(false)
    const isSnackbarLeftVisible = ref(false)
    const isSnackbarCenteredVisible = ref(false)

    return {
      isSnackbarTopLeftVisible,
      isSnackbarTopVisible,
      isSnackbarTopRightVisible,
      isSnackbarRightVisible,
      isSnackbarLeftVisible,
      isSnackbarBottomRightVisible,
      isSnackbarBottomVisible,
      isSnackbarBottomLeftVisible,
      isSnackbarCenteredVisible,

      // icons
      icons: {
        mdiArrowTopLeft,
        mdiArrowUp,
        mdiArrowTopRight,
        mdiArrowBottomRight,
        mdiArrowDown,
        mdiArrowBottomLeft,
        mdiArrowLeft,
        mdiArrowRight,
        mdiArrowCollapseAll,
      },
    }
  },
}
</script>
