<template>
  <v-combobox
    v-model="selectedList"
    :items="items"
    :search-input.sync="search"
    hide-selected
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
    small-chips
  >
    <template #no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, watch, nextTick } from '@vue/composition-api'

export default {
  setup() {
    const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
    const selectedList = ref(['Vuetify'])
    const search = ref(null)

    watch(selectedList, value => {
      if (value.length > 5) {
        nextTick(() => selectedList.value.pop())
      }
    })

    return { items, selectedList, search }
  },
}
</script>
