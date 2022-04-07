<template>
  <v-autocomplete
    :items="items"
    dense
  ></v-autocomplete>
</template>

<script>
export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']

    return { items }
  },
}
</script>
