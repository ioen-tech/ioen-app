<template>
  <v-radio-group
    v-model="selectedRadio"
    class="mt-0"
    hide-details
  >
    <div class="d-flex flex-wrap demo-space-x">
      <v-radio
        label="primary"
        color="primary"
        value="primary"
      ></v-radio>
      <v-radio
        label="secondary"
        color="secondary"
        value="secondary"
      ></v-radio>
      <v-radio
        label="success"
        color="success"
        value="success"
      ></v-radio>
      <v-radio
        label="info"
        color="info"
        value="info"
      ></v-radio>
      <v-radio
        label="warning"
        color="warning"
        value="warning"
      ></v-radio>
      <v-radio
        label="error"
        color="error"
        value="error"
      ></v-radio>
    </div>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedRadio = ref('primary')

    return { selectedRadio }
  },
}
</script>
