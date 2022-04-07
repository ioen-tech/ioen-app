<template>
  <div>
    <v-alert
      v-model="isAlertVisible"
      border="top"
      color="primary"
      dark
      dismissible
      class="mb-0"
    >
      Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

      Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>

    <!-- button -->
    <div class="text-center">
      <v-btn
        v-if="!isAlertVisible"
        color="primary"
        dark
        @click="isAlertVisible = true"
      >
        Reset
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isAlertVisible = ref(true)

    return { isAlertVisible }
  },
}
</script>
