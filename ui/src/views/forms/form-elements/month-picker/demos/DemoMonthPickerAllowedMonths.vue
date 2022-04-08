<template>
  <v-date-picker
    v-model="date"
    :allowed-dates="allowedMonths"
    type="month"
    class="mt-4"
    min="2017-06"
    max="2019-10"
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const date = ref('2017-12')

    const allowedMonths = val => parseInt(val.split('-')[1], 10) % 2 === 0

    return {
      date,
      allowedMonths,
    }
  },
}
</script>
