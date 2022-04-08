<template>
  <v-combobox
    :items="items"
    hide-details
  ></v-combobox>
</template>

<script>
export default {
  setup() {
    const items = ['Programming', 'Design', 'Vue', 'Vuetify']

    return { items }
  },
}
</script>
