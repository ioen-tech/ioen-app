<template>
  <v-date-picker
    v-model="picker"
    type="month"
    color="primary"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 10)

    return {
      picker,
    }
  },
}
</script>
