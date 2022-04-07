<template>
  <div class="demo-space-x">
    <v-chip
      v-if="isDefaultVisible"
      close
      @click:close="isDefaultVisible = !isDefaultVisible"
    >
      Default
    </v-chip>

    <v-chip
      v-if="isPrimaryVisible"
      close
      color="primary"
      @click:close="isPrimaryVisible = !isPrimaryVisible"
    >
      Primary
    </v-chip>

    <v-chip
      v-if="isSecondaryVisible"
      close
      color="secondary"
      @click:close="isSecondaryVisible = !isSecondaryVisible"
    >
      Secondary
    </v-chip>

    <v-chip
      v-if="isSuccessVisible"
      close
      color="success"
      @click:close="isSuccessVisible = !isSuccessVisible"
    >
      Success
    </v-chip>

    <v-chip
      v-if="isInfoVisible"
      close
      color="info"
      @click:close="isInfoVisible = !isInfoVisible"
    >
      Info
    </v-chip>

    <v-chip
      v-if="isWarningVisible"
      close
      color="warning"
      @click:close="isWarningVisible = !isWarningVisible"
    >
      Warning
    </v-chip>

    <v-chip
      v-if="isErrorVisible"
      close
      color="error"
      @click:close="isErrorVisible = !isErrorVisible"
    >
      Error
    </v-chip>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isDefaultVisible = ref(true)
    const isPrimaryVisible = ref(true)
    const isSecondaryVisible = ref(true)
    const isSuccessVisible = ref(true)
    const isInfoVisible = ref(true)
    const isWarningVisible = ref(true)
    const isErrorVisible = ref(true)

    return {
      isDefaultVisible,
      isPrimaryVisible,
      isSecondaryVisible,
      isSuccessVisible,
      isInfoVisible,
      isWarningVisible,
      isErrorVisible,
    }
  },
}
</script>
