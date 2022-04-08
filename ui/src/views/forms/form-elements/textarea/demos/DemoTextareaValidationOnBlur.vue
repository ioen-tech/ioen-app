<template>
  <v-textarea
    label="Validation"
    :rules="rules"
    :value="value"
    rows="2"
    validate-on-blur
  ></v-textarea>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rules = [v => v.length <= 25 || 'Max 25 characters']
    const value = ref('Hello!')

    return { rules, value }
  },
}
</script>
