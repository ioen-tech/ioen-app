<template>
  <v-autocomplete
    :items="states"
    :filter="customFilter"
    item-text="name"
    label="State"
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const states = ref([
      { name: 'Florida', abbr: 'FL', id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2 },
      { name: 'Nebraska', abbr: 'NE', id: 3 },
      { name: 'California', abbr: 'CA', id: 4 },
      { name: 'New York', abbr: 'NY', id: 5 },
    ])

    const customFilter = (item, queryText) => {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
    }

    return { states, customFilter }
  },
}
</script>
