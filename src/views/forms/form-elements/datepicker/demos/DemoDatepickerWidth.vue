<template>
  <v-date-picker
    v-model="date"
    color="primary"
    full-width
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)

    return { date }
  },
}
</script>
