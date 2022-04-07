<template>
  <v-card flat>
    <v-row>
      <v-col
        cols="12"
        sm="5"
      >
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="fetch"
            :items="items"
            selected-color="primary"
            open-on-click
            selectable
            return-object
            :expand-icon="icons.mdiChevronDown"
            :on-icon="icons.mdiBookmark"
            :off-icon="icons.mdiBookmarkOutline"
            :indeterminate-icon="icons.mdiBookmarkMinus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-col
        sm="1"
        cols="12"
      >
        <v-divider :vertical="$vuetify.breakpoint.name === 'xs' ? false : true"></v-divider>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="title font-weight-light pa-4 text-center"
          >
            Select your favorite breweries
          </div>

          <v-scroll-x-transition
            group
            hide-on-leave
          >
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="secondary"
              dark
              small
              class="v-chip-light-bg secondary--text ma-1"
            >
              <v-icon
                left
                small
              >
                {{ icons.mdiTimerSandEmpty }}
              </v-icon>
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
        </v-card-text>
      </v-col>
    </v-row>

    <v-card-actions class="pb-0">
      <v-btn
        text
        @click="tree = []"
      >
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="success"
        depressed
      >
        Save
        <v-icon right>
          {{ icons.mdiContentSaveOutline }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from '@axios'
// eslint-disable-next-line object-curly-newline
import { computed, ref, watch } from '@vue/composition-api'
import {
  mdiContentSaveOutline,
  mdiTimerSandEmpty,
  mdiSilverware,
  mdiChevronDown,
  mdiBookmark,
  mdiBookmarkOutline,
  mdiBookmarkMinus,
} from '@mdi/js'

export default {
  setup() {
    const breweries = ref([])
    const isLoading = ref(false)
    const tree = ref([])
    const types = ref([])

    const fetch = () => {
      if (breweries.value.length) return null

      return axios
        .get('https://api.openbrewerydb.org/breweries')
        .then(response => {
          breweries.value = response.data
        })
        .catch(err => console.error(err))
    }

    const getName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const getChildren = type => {
      const breweriesLocal = []

      // eslint-disable-next-line no-restricted-syntax
      for (const brewery of breweries.value) {
        // eslint-disable-next-line no-continue
        if (brewery.brewery_type !== type) continue

        breweriesLocal.push({
          ...brewery,
          name: getName(brewery.name),
        })
      }

      return breweriesLocal.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    const items = computed(() => {
      const children = types.value.map(type => ({
        id: type,
        name: getName(type),
        children: getChildren(type),
      }))

      return [
        {
          id: 1,
          name: 'All Breweries',
          children,
        },
      ]
    })

    const shouldShowTree = computed(() => breweries.value.length > 0 && !isLoading.value)

    watch(breweries, val => {
      types.value = val
        .reduce((acc, cur) => {
          const type = cur.brewery_type

          if (!acc.includes(type)) acc.push(type)

          return acc
        }, [])
        .sort()
    })

    return {
      breweries,
      isLoading,
      tree,
      types,
      items,
      shouldShowTree,
      fetch,
      getName,
      getChildren,
      icons: {
        mdiContentSaveOutline,
        mdiTimerSandEmpty,
        mdiSilverware,
        mdiChevronDown,
        mdiBookmark,
        mdiBookmarkOutline,
        mdiBookmarkMinus,
      },
    }
  },
}
</script>
