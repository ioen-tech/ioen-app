<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    hide-details
    label="What state are you from?"
  ></v-autocomplete>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const loading = ref(false)
    const items = ref([])
    const search = ref(null)
    const select = ref(null)
    const states = [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ]

    const querySelections = query => {
      loading.value = true

      // Simulated ajax query
      setTimeout(() => {
        items.value = states.filter(state => (state || '').toLowerCase().indexOf((query || '').toLowerCase()) > -1)
        loading.value = false
      }, 500)
    }

    watch(search, query => {
      // eslint-disable-next-line no-unused-expressions
      query && query !== select.value && querySelections(query)
    })

    return {
      loading,
      items,
      search,
      select,
      states,
      querySelections,
    }
  },
}
</script>
