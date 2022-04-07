<template>
  <v-select
    v-model="value"
    :items="items"
    attach
    chips
    label="Chips"
    multiple
    hide-details
  ></v-select>
</template>

<script>
export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const value = ['foo', 'bar', 'fizz', 'buzz']

    return { items, value }
  },
}
</script>
