<template>
  <v-textarea
    counter
    label="Text"
    :value="value"
  ></v-textarea>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref('Hello!')

    return { value }
  },
}
</script>
