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
