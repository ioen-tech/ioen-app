<template>
  <v-date-picker
    v-model="picker"
    color="success"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 10)
    const picker2 = new Date().toISOString().substr(0, 10)

    return {
      picker,
      picker2,
    }
  },
}
</script>
