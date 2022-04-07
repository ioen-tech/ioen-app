/* eslint-disable no-useless-escape */

export const snackbarWithAction = `
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
`

export const snackbarVariants = `
<template>
  <div class="demo-space-x">
    <!-- shaped toggle btn -->
    <v-btn
      color="primary"
      @click="isShapedSnackbarVisible = true"
    >
      shaped
    </v-btn>

    <!-- shaped snackbar -->
    <v-snackbar
      v-model="isShapedSnackbarVisible"
      shaped
      top
      :light="$vuetify.theme.dark"
    >
      Donut sweet marshmallow cookie bonbon pastry tootsie roll.
    </v-snackbar>

    <!-- rounded toggle btn-->
    <v-btn
      color="primary"
      @click="isRoundedSnackbarVisible = true"
    >
      Rounded
    </v-btn>

    <!-- rounded snackbar -->
    <v-snackbar
      v-model="isRoundedSnackbarVisible"
      rounded="pill"
      top
      :light="$vuetify.theme.dark"
      right
    >
      Jelly chocolate bar candy canes apple pie.
    </v-snackbar>

    <!-- color toggle btn-->
    <v-btn
      color="primary"
      @click="isColorSnackbarVisible = true"
    >
      Color
    </v-btn>

    <!-- color snackbar -->
    <v-snackbar
      v-model="isColorSnackbarVisible"
      bottom
      right
      color="primary"
    >
      Ice cream cake candy canes.
    </v-snackbar>

    <!-- text toggle btn-->
    <v-btn
      color="primary"
      @click="isTextSnackbarVisible = true"
    >
      Text
    </v-btn>

    <!-- text snackbar -->
    <v-snackbar
      v-model="isTextSnackbarVisible"
      bottom
      :light="$vuetify.theme.dark"
      text
      color="primary"
    >
      Pie icing biscuit soufflé liquorice topping.
    </v-snackbar>

    <!-- outline toggle btn-->
    <v-btn
      color="primary"
      @click="isOutlinedSnackbarVisible = true"
    >
      Outlined
    </v-btn>

    <!-- outline snackbar -->
    <v-snackbar
      v-model="isOutlinedSnackbarVisible"
      left
      bottom
      outlined
      :light="$vuetify.theme.dark"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </v-snackbar>

    <!-- Tile toggle btn-->
    <v-btn
      color="primary"
      @click="isTileSnackbarVisible = true"
    >
      Tile
    </v-btn>

    <!-- tile snackbar -->
    <v-snackbar
      v-model="isTileSnackbarVisible"
      top
      left
      :light="$vuetify.theme.dark"
      tile
    >
      Dessert tootsie wafer ice cream toffee jelly-o.
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isShapedSnackbarVisible = ref(false)
    const isRoundedSnackbarVisible = ref(false)
    const isColorSnackbarVisible = ref(false)
    const isTextSnackbarVisible = ref(false)
    const isOutlinedSnackbarVisible = ref(false)
    const isTileSnackbarVisible = ref(false)

    return {
      isShapedSnackbarVisible,
      isRoundedSnackbarVisible,
      isColorSnackbarVisible,
      isTextSnackbarVisible,
      isOutlinedSnackbarVisible,
      isTileSnackbarVisible,
    }
  },
}
</script>
`

export const snackbarDefault = `
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
`

export const snackbarPosition = `
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
`

export const snackbarTimeout = `
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
`

export const snackbarTransition = `
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
`

export const snackbarVertical = `
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
`

export const snackbarMultiline = `
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
`
