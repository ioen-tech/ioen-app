<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-autocomplete
        v-model="value"
        :items="items"
        outlined
        label="Outlined"
      ></v-autocomplete>

      <v-autocomplete
        v-model="value"
        :items="items"
        label="Solo"
        solo
      ></v-autocomplete>

      <v-autocomplete
        v-model="value"
        :items="items"
        rounded
        solo
        hide-details
        label="Rounded"
      ></v-autocomplete>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-autocomplete
        v-model="value"
        :items="items"
        filled
        label="Filled"
      ></v-autocomplete>

      <v-autocomplete
        v-model="value"
        :items="items"
        solo-inverted
        label="Solo Inverted"
      ></v-autocomplete>

      <v-autocomplete
        v-model="value"
        :items="items"
        shaped
        filled
        label="Shaped"
        hide-details
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const value = ref(null)

    return { items, value }
  },
}
</script>
