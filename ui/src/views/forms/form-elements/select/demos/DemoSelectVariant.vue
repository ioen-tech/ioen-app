<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Default"
      ></v-select>

      <v-select
        :items="items"
        label="Outlined"
        outlined
      ></v-select>

      <v-select
        :items="items"
        label="Shaped"
        shaped
        outlined
      ></v-select>

      <v-select
        :items="items"
        label="Solo"
        solo
        hide-details
      ></v-select>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Filled"
        filled
      ></v-select>

      <v-select
        :items="items"
        label="Solo Inverted"
        solo-inverted
      ></v-select>

      <v-select
        :items="items"
        label="Flat"
        solo-inverted
        flat
      ></v-select>

      <v-select
        :items="items"
        label="Rounded"
        filled
        rounded
        hide-details
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz']

    return { items }
  },
}
</script>
