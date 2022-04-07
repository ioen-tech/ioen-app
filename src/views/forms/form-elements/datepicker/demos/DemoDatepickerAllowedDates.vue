<template>
  <v-date-picker
    v-model="date"
    color="primary"
    :allowed-dates="allowedDates"
    class="mt-4"
    min="2016-06-15"
    max="2018-03-20"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const date = ref('2018-03-02')

    const allowedDates = val => parseInt(val.split('-')[2], 10) % 2 === 0

    return {
      date,
      allowedDates,
    }
  },
}
</script>
