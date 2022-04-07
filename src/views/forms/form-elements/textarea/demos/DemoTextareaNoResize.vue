<template>
  <v-textarea
    label="Text"
    no-resize
    rows="2"
    :value="value"
    hide-details
  ></v-textarea>
</template>

<script>
export default {
  setup() {
    const value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `

    return { value }
  },
}
</script>
