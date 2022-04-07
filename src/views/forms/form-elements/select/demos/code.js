/* eslint-disable no-useless-escape */

export const selectMultiple = `
<template>
  <v-select
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    hide-details
  ></v-select>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedOptions = ref([])
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
    ]

    return { selectedOptions, states }
  },
}
</script>
`

export const selectAppendAndPrependItem = `
<template>
  <v-select
    v-model="selectedFruits"
    :items="fruits"
    label="Favorite Fruits"
    multiple
    hide-details
  >
    <template #prepend-item>
      <v-list-item
        ripple
        @click="toggle"
      >
        <v-list-item-action>
          <v-icon :color="selectedFruits.length > 0 ? 'primary' : ''">
            {{ icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Select All
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
    <template #append-item>
      <v-divider class="mb-2"></v-divider>
      <v-list-item disabled>
        <v-list-item-avatar>
          <v-icon>
            {{ icons.mdiFoodAppleOutline }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content v-if="likesAllFruit">
          <v-list-item-title>
            Holy smokes, someone call the fruit police!
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content v-else-if="likesSomeFruit">
          <v-list-item-title>
            Fruit Count
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ selectedFruits.length }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content v-else>
          <v-list-item-title>
            How could you not like fruit?
          </v-list-item-title>
          <v-list-item-subtitle>
            Go ahead, make a selection above!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</template>

<script>
/* eslint-disable object-curly-newline */
import { computed, ref, nextTick } from '@vue/composition-api'
import { mdiCloseBoxOutline, mdiMinusBoxOutline, mdiCheckboxBlankOutline, mdiFoodAppleOutline } from '@mdi/js'

export default {
  setup() {
    const fruits = [
      'Apples',
      'Apricots',
      'Avocado',
      'Bananas',
      'Blueberries',
      'Blackberries',
      'Boysenberries',
      'Bread fruit',
      'Cantaloupes (cantalope)',
      'Cherries',
      'Cranberries',
      'Cucumbers',
      'Currants',
      'Dates',
      'Eggplant',
      'Figs',
      'Grapes',
      'Grapefruit',
      'Guava',
      'Honeydew melons',
      'Huckleberries',
      'Kiwis',
      'Kumquat',
      'Lemons',
      'Limes',
      'Mangos',
      'Mulberries',
      'Muskmelon',
      'Nectarines',
      'Olives',
      'Oranges',
      'Papaya',
      'Peaches',
      'Pears',
      'Persimmon',
      'Pineapple',
      'Plums',
      'Pomegranate',
      'Raspberries',
      'Rose Apple',
      'Starfruit',
      'Strawberries',
      'Tangerines',
      'Tomatoes',
      'Watermelons',
      'Zucchini',
    ]
    const selectedFruits = ref([])

    const likesAllFruit = computed(() => selectedFruits.value.length === fruits.length)

    const likesSomeFruit = computed(() => selectedFruits.value.length > 0 && !likesAllFruit.value)
    const icon = computed(() => {
      if (likesAllFruit.value) return mdiCloseBoxOutline

      if (likesSomeFruit.value) return mdiMinusBoxOutline

      return mdiCheckboxBlankOutline
    })

    const toggle = () => {
      nextTick(() => {
        if (likesAllFruit.value) {
          selectedFruits.value = []
        } else {
          selectedFruits.value = fruits.slice()
        }
      })
    }

    return {
      fruits,
      selectedFruits,
      likesAllFruit,
      likesSomeFruit,
      icon,
      toggle,

      // icons
      icons: {
        mdiFoodAppleOutline,
      },
    }
  },
}
</script>
`

export const selectDense = `
<template>
  <v-select
    :items="items"
    label="Dense"
    dense
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
`

export const selectVariant = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Default"
      ></v-select>

      <v-select
        :items="items"
        label="Outlined"
        outlined
      ></v-select>

      <v-select
        :items="items"
        label="Shaped"
        shaped
        outlined
      ></v-select>

      <v-select
        :items="items"
        label="Solo"
        solo
        hide-details
      ></v-select>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Filled"
        filled
      ></v-select>

      <v-select
        :items="items"
        label="Solo Inverted"
        solo-inverted
      ></v-select>

      <v-select
        :items="items"
        label="Flat"
        solo-inverted
        flat
      ></v-select>

      <v-select
        :items="items"
        label="Rounded"
        filled
        rounded
        hide-details
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz']

    return { items }
  },
}
</script>
`

export const selectIcons = `
<template>
  <v-container fluid>
    <v-select
      v-model="selectedOption1"
      :items="states"
      menu-props="auto"
      label="Select"
      hide-details
      :prepend-icon="icons.mdiMapOutline"
      single-line
      class="pt-0"
    ></v-select>

    <v-select
      v-model="selectedOption2"
      :items="states"
      :append-outer-icon="icons.mdiMapOutline"
      menu-props="auto"
      hide-details
      label="Select"
      single-line
    ></v-select>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMapOutline } from '@mdi/js'

export default {
  setup() {
    const selectedOption1 = ref('Florida')
    const selectedOption2 = ref('Texas')

    const items = [
      { text: 'State 1' },
      { text: 'State 2' },
      { text: 'State 3' },
      { text: 'State 4' },
      { text: 'State 5' },
      { text: 'State 6' },
      { text: 'State 7' },
    ]

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
    ]

    return {
      selectedOption1,
      selectedOption2,
      items,
      states,

      icons: {
        mdiMapOutline,
      },
    }
  },
}
</script>
`

export const selectSelectionSlot = `
<template>
  <v-select
    v-model="friends"
    :items="people"
    item-text="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    hide-details
    :menu-props="{contentClass:'list-style'}"
  >
    <template #selection="data">
      <v-chip
        v-bind="data.attrs"
        label
        :input-value="data.selected"
        @click="data.select"
      >
        <v-avatar left>
          <v-img :src="data.item.avatar"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>

    <template #item="data">
      <v-list-item-avatar>
        <v-img :src="data.item.avatar"></v-img>
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
  </v-select>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const friends = ref(['Sandra Adams', 'Britta Holt'])

    const name = ref('Midnight Crew')

    const people = ref([
      { name: 'Sandra Adams', avatar: require('@/assets/images/avatars/1.png') },
      { name: 'Ali Connors', avatar: require('@/assets/images/avatars/2.png') },
      { name: 'Trevor Hansen', avatar: require('@/assets/images/avatars/3.png') },
      { name: 'Tucker Smith', avatar: require('@/assets/images/avatars/4.png') },
      { name: 'Britta Holt', avatar: require('@/assets/images/avatars/5.png') },
    ])

    return {
      friends,
      name,
      people,
    }
  },
}
</script>
`

export const selectBasic = `
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
`

export const selectChips = `
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
`

export const selectCustomTextAndValue = `
<template>
  <v-select
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-text="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  ></v-select>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

    const items = [
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ]

    return { selectedOption, items }
  },
}
</script>
`

export const selectMenuProps = `
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
`
