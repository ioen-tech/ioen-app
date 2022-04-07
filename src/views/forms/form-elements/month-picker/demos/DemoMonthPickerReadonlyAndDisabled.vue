<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        readonly
        color="primary"
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        color="primary"
        disabled
      ></v-date-picker>
    </v-col>
  </v-row>
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
