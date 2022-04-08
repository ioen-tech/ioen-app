<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      dark
    >
      Accept
      <v-icon
        dark
        right
      >
        {{ icons.mdiCheckboxMarkedCircleOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="secondary"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiMinusCircleOutline }}
      </v-icon>Cancel
    </v-btn>

    <v-btn
      color="success"
      dark
    >
      Upload
      <v-icon
        dark
        right
      >
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="info"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiArrowLeft }}
      </v-icon>Back
    </v-btn>

    <v-btn
      color="warning"
      dark
    >
      <v-icon dark>
        {{ icons.mdiWrenchOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="error"
      dark
    >
      <v-icon dark>
        {{ icons.mdiCancel }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCancel,
  mdiMinusCircleOutline,
  mdiArrowLeft,
  mdiWrenchOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCheckboxMarkedCircleOutline,
        mdiCancel,
        mdiMinusCircleOutline,
        mdiArrowLeft,
        mdiWrenchOutline,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>
