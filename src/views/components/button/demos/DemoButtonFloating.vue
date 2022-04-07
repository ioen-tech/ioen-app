<template>
  <div class="demo-space-x">
    <v-btn
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        {{ icons.mdiMinus }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      small
      color="secondary"
    >
      <v-icon dark>
        {{ icons.mdiAccountCircleOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      color="success"
    >
      <v-icon dark>
        {{ icons.mdiPlus }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      color="info"
    >
      <v-icon dark>
        {{ icons.mdiFormatListBulletedSquare }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      large
      color="warning"
    >
      <v-icon dark>
        {{ icons.mdiGreasePencil }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      large
      color="error"
    >
      <v-icon dark>
        {{ icons.mdiAndroidDebugBridge }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mdiMinus,
  mdiAccountCircleOutline,
  mdiPlus,
  mdiFormatListBulletedSquare,
  mdiGreasePencil,
  mdiAndroidDebugBridge,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiMinus,
        mdiAccountCircleOutline,
        mdiPlus,
        mdiFormatListBulletedSquare,
        mdiGreasePencil,
        mdiAndroidDebugBridge,
      },
    }
  },
}
</script>
