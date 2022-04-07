<template>
  <div class="demo-space-x">
    <v-avatar
      rounded
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="error"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
import { mdiAccountOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
      },
    }
  },
}
</script>
