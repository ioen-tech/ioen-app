<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        type="month"
        locale="th"
        color="primary"
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        type="month"
        color="primary"
        locale="sv-se"
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(new Date().toISOString().substr(0, 7))

    return {
      picker,
    }
  },
}
</script>
