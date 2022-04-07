<template>
  <div class="demo-space-x">
    <v-switch
      v-model="people"
      color="primary"
      label="John"
      value="John"
    ></v-switch>

    <v-switch
      v-model="people"
      color="primary"
      label="Jacob"
      value="Jacob"
    ></v-switch>
    <p class="mb-0">
      {{ people }}
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const people = ref(['John'])

    return { people }
  },
}
</script>
