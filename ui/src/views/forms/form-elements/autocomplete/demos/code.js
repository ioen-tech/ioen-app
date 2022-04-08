/* eslint-disable no-useless-escape */

export const autocompleteFilter = `
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
`

export const autocompleteClearable = `
<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    label="Clearable"
    multiple
    clearable
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref(['foo', 'bar'])

    return { items, values }
  },
}
</script>
`

export const autocompleteAsynchronousItems = `
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
`

export const autocompletePrefixAndSuffix = `
<template>
  <v-autocomplete
    v-model="value"
    :items="items"
    prefix="$"
    suffix="Donate"
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = [5, 10, 15, 50, 150, 200]
    const value = ref(5)

    return { items, value }
  },
}
</script>
`

export const autocompleteBasic = `
<template>
  <v-autocomplete :items="items"></v-autocomplete>
</template>

<script>
export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']

    return { items }
  },
}
</script>
`

export const autocompleteChips = `
<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    outlined
    chips
    hide-details
    small-chips
    label="Chips"
    multiple
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref(['foo', 'bar'])

    return { items, values }
  },
}
</script>
`

export const autocompleteAutoSelectFirst = `
<template>
  <v-autocomplete
    v-model="value"
    :items="items"
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const value = ref('foo')

    return { items, value }
  },
}
</script>
`

export const autocompleteValidation = `
<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref([])
    const nameRules = [v => !!v.length || 'Select at least one option.']

    return { items, values, nameRules }
  },
}
</script>
`

export const autocompleteVariant = `
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
`

export const autocompleteItemAndSelection = `
<template>
  <v-autocomplete
    v-model="friends"
    :items="people"
    filled
    chips
    hide-details
    label="Select"
    item-text="name"
    item-value="name"
    :menu-props="{contentClass:'list-style'}"
    multiple
  >
    <template #selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        @click:close="remove(data.item)"
      >
        <v-avatar left>
          <v-img :src="\`/images/avatars/\${data.item.avatar}\`"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>

    <template #item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>

      <template v-else>
        <v-list-item-avatar>
          <v-img :src="\`/images/avatars/\${data.item.avatar}\`"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ data.item.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ data.item.group }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const srcs = {
      1: '1.png',
      2: '2.png',
      3: '3.png',
      4: '4.png',
      5: '5.png',
    }

    const friends = ref(['Sandra Adams', 'Britta Holt'])
    const name = ref('Midnight Crew')
    const people = ref([
      { header: 'Group 1' },
      { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
      { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
      { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
      { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
      { divider: true },
      { header: 'Group 2' },
      { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
      { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
      { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
      { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
    ])
    const title = ref('The summer breeze')

    const remove = item => {
      const index = friends.value.indexOf(item.name)
      if (index >= 0) friends.value.splice(index, 1)
    }

    return {
      friends,
      name,
      people,
      title,
      remove,
    }
  },
}
</script>
`

export const autocompleteValidateOnBlur = `
<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
    validate-on-blur
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref([])
    const nameRules = [v => !!v.length || 'Select at least one option.']

    return { items, values, nameRules }
  },
}
</script>
`

export const autocompleteMultiple = `
<template>
  <v-autocomplete
    v-model="values"
    :items="items"
    label="Multiple"
    multiple
  ></v-autocomplete>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = ref(['foo', 'bar'])

    return { items, values }
  },
}
</script>
`

export const autocompleteDense = `
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
`
