<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-switch
      v-model="switch1"
      flat
      :label="`Switch 1: ${switch1.toString()}`"
      hide-details
    ></v-switch>
    <v-switch
      v-model="switch2"
      flat
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
