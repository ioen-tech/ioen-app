<template>
  <div class="demo-space-x">
    <v-btn
      icon
      color="primary"
    >
      <v-icon>
        {{ icons.mdiBriefcaseDownloadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="secondary"
    >
      <v-icon>
        {{ icons.mdiAccountPlusOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="success"
    >
      <v-icon>{{ icons.mdiMagnify }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="info"
    >
      <v-icon>{{ icons.mdiThumbUpOutline }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="warning"
    >
      <v-icon>{{ icons.mdiStarOutline }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="error"
    >
      <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiBriefcaseDownloadOutline, mdiAccountPlusOutline, mdiMagnify, mdiHeartOutline, mdiStarOutline, mdiThumbUpOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiBriefcaseDownloadOutline,
        mdiAccountPlusOutline,
        mdiMagnify,
        mdiHeartOutline,
        mdiStarOutline,
        mdiThumbUpOutline,
      },
    }
  },
}
</script>
