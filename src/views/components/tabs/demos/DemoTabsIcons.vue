<template>
  <v-tabs
    :next-icon="icons.mdiArrowRight"
    :prev-icon="icons.mdiArrowLeft"
    show-arrows
  >
    <v-tab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiArrowRight,
        mdiArrowLeft,
      },
    }
  },
}
</script>
