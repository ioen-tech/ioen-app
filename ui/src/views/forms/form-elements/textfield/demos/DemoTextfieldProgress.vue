<template>
  <v-text-field
    v-model="textfieldValue"
    color="cyan darken"
    label="Text field"
    placeholder="Start typing..."
    loading
  >
    <template v-slot:progress>
      <v-progress-linear
        :value="progress"
        :color="color"
        absolute
        height="7"
      ></v-progress-linear>
    </template>
  </v-text-field>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const textfieldValue = ref('')

    const progress = computed(() => Math.min(100, textfieldValue.value.length * 10))

    const color = computed(() => ['error', 'warning', 'success'][Math.floor(progress.value / 40)])

    return {
      textfieldValue,
      progress,
      color,
    }
  },
}
</script>
