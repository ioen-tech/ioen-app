<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        :first-day-of-week="0"
        locale="zh-cn"
        color="primary"
      ></v-date-picker>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        :first-day-of-week="1"
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
    const picker = ref(new Date().toISOString().substr(0, 10))

    return { picker }
  },
}
</script>
