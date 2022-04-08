<template>
  <v-date-picker
    v-model="months"
    type="month"
    multiple
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const months = ref(['2018-09', '2018-10'])

    return {
      months,
    }
  },
}
</script>
