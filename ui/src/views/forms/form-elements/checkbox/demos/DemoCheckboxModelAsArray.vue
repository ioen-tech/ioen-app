<template>
  <div>
    <div class="d-flex demo-space-x flex-wrap">
      <v-checkbox
        v-model="selected"
        label="John"
        value="John"
      ></v-checkbox>

      <v-checkbox
        v-model="selected"
        label="Jacob"
        color="success"
        value="Jacob"
      ></v-checkbox>

      <v-checkbox
        v-model="selected"
        label="Jonhson"
        color="info"
        value="Jonhson"
      ></v-checkbox>
    </div>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selected = ref(['John'])

    return { selected }
  },
}
</script>
