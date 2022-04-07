<template>
  <div>
    <v-alert
      color="primary"
      dark
      :icon="icons.mdiFirework"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>

    <v-alert
      color="secondary"
      dark
      :icon="icons.mdiMaterialDesign"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </v-alert>

    <v-alert
      color="success"
      dark
      :icon="icons.mdiVuetify"
      class="mb-0"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </v-alert>
  </div>
</template>

<script>
import { mdiFirework, mdiMaterialDesign, mdiVuetify } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFirework,
        mdiMaterialDesign,
        mdiVuetify,
      },
    }
  },
}
</script>
