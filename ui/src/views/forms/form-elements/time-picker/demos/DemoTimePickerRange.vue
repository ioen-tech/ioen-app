<template>
  <v-row class="ma-0">
    <v-col
      cols="12"
      md="6"
    >
      <div>
        <h2>Start:</h2>
        <v-time-picker
          v-model="start"
          color="primary"
          :max="end"
        ></v-time-picker>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <div>
        <h2>End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          color="primary"
        ></v-time-picker>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const start = ref(null)
    const end = ref(null)

    return { start, end }
  },
}
</script>
