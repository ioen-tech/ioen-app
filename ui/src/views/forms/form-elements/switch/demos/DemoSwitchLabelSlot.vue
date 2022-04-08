<template>
  <v-switch
    v-model="switchMe"
    hide-details
  >
    <template #label>
      Turn on the progress: <v-progress-circular
        :indeterminate="switchMe"
        :value="0"
        size="24"
        class="ms-2"
      ></v-progress-circular>
    </template>
  </v-switch>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switchMe = ref(false)

    return { switchMe }
  },
}
</script>
