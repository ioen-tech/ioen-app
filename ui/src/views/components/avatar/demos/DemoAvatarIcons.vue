<template>
  <div class="demo-space-x">
    <v-avatar
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiHomeOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiCloudOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiBellOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="error"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiMessageOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiHomeOutline, mdiBellOutline, mdiAccountOutline, mdiMessageOutline, mdiCloudOutline, mdiAlertOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiBellOutline,
        mdiAccountOutline,
        mdiMessageOutline,
        mdiCloudOutline,
        mdiAlertOutline,
      },
    }
  },
}
</script>
