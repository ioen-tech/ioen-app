<template>
  <v-select
    :items="items"
    label="Standard"
    hide-details
  ></v-select>
</template>

<script>
export default {
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz']

    return { items }
  },
}
</script>
