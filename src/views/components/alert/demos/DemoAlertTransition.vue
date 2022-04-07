<template>
  <div>
    <v-btn
      color="primary"
      class="mb-4"
      @click="isAlertVisible = !isAlertVisible"
    >
      {{ isAlertVisible ? 'Hide Alert' : 'Show Alert' }}
    </v-btn>

    <!-- alert -->
    <div style="height:76px">
      <v-alert
        v-model="isAlertVisible"
        text
        color="error"
        dark
        transition="slide-y-transition"
        class="mb-0"
      >
        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
      </v-alert>
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
