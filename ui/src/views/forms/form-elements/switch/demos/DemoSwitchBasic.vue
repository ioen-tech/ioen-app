<template>
  <div class="demo-space-x">
    <v-switch
      v-model="switch1"
      :label="`${switch1.toString()}`"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(true)

    return { switch1 }
  },
}
</script>
