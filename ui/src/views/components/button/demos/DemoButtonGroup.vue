<template>
  <v-btn-toggle
    v-model="toggleExclusive"
    mandatory
  >
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignLeft }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignCenter }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignRight }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignJustify }}</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiFormatAlignLeft, mdiFormatAlignCenter, mdiFormatAlignRight, mdiFormatAlignJustify } from '@mdi/js'

export default {
  setup() {
    const toggleExclusive = ref(undefined)

    return {
      toggleExclusive,

      // icon
      icons: {
        mdiFormatAlignLeft,
        mdiFormatAlignCenter,
        mdiFormatAlignRight,
        mdiFormatAlignJustify,
      },
    }
  },
}
</script>
