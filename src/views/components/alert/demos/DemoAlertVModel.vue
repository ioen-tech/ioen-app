<template>
  <div>
    <v-alert
      v-model="isAlertVisible"
      color="warning"
      text
      transition="slide-y-transition"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>

    <!-- button -->
    <v-btn
      color="primary"
      @click="isAlertVisible = !isAlertVisible"
    >
      {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
    </v-btn>
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
