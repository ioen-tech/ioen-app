<template>
  <div>
    <v-switch
      v-model="switch1"
      inset
      :label="`Switch 1: ${switch1.toString()}`"
    ></v-switch>
    <v-switch
      v-model="switch2"
      inset
      :label="`Switch 2: ${switch2.toString()}`"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(true)
    const switch2 = ref(false)

    return { switch1, switch2 }
  },
}
</script>
