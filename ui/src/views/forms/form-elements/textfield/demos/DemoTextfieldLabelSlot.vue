<template>
  <v-text-field hide-details>
    <template v-slot:label>
      What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">
        {{ icons.mdiFileFindOutline }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import { mdiFileFindOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFileFindOutline,
      },
    }
  },
}
</script>
