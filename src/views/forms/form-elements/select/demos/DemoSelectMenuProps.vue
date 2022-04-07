<template>
  <v-select
    :items="items"
    :menu-props="{ top: true, offsetY: true }"
    label="Label"
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
