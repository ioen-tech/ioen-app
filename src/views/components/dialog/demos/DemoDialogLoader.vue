<template>
  <div>
    <v-btn
      :disabled="isDialogVisible"
      :loading="isDialogVisible"
      class="white--text"
      color="primary"
      @click="isDialogVisible = true"
    >
      Start loading
    </v-btn>

    <v-dialog
      v-model="isDialogVisible"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text class="pt-3">
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const isDialogVisible = ref(false)
    watch(isDialogVisible, value => {
      if (!value) return

      setTimeout(() => {
        isDialogVisible.value = false
      }, 4000)
    })

    return { isDialogVisible }
  },
}
</script>
