<template>
  <v-date-picker
    v-model="dates"
    multiple
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const dates = ref(['2018-09-15', '2018-09-20'])

    return {
      dates,
    }
  },
}
</script>
