<template>
  <div class="demo-space-x">
    <v-badge
      color="primary"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="secondary"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="success"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="info"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="warning"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="error"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>
  </div>
</template>

<script>
import { mdiInstagram } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiInstagram,
      },
    }
  },
}
</script>
