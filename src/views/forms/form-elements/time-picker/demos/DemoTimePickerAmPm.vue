<template>
  <v-time-picker
    v-model="picker"
    ampm-in-title
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return { picker }
  },
}
</script>
