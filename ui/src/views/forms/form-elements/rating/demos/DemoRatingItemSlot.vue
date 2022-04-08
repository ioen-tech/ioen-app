<template>
  <v-rating v-model="rating">
    <template v-slot:item="props">
      <v-icon
        :color="props.isFilled ? 'success' : 'secondary'"
        @click="props.click"
      >
        {{ props.isFilled ? icons.mdiEmoticonExcitedOutline : icons.mdiEmoticonSadOutline }}
      </v-icon>
    </template>
  </v-rating>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiEmoticonSadOutline, mdiEmoticonExcitedOutline } from '@mdi/js'

export default {
  setup() {
    const rating = ref(4.5)

    return {
      rating,

      // icons
      icons: {
        mdiEmoticonSadOutline,
        mdiEmoticonExcitedOutline,
      },
    }
  },
}
</script>
