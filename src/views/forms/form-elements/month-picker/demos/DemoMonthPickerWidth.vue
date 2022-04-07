<template>
  <v-date-picker
    v-model="date"
    full-width
    color="primary"
    type="month"
    class="mt-4"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 7)

    return {
      date,
    }
  },
}
</script>
