<template>
  <div>
    <v-select
      v-model="selectionType"
      :items="['leaf', 'independent']"
      label="Selection type"
    ></v-select>

    <v-row>
      <v-col
        cols="12"
        sm="5"
      >
        <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview>
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
        <template v-if="!selection.length">
          No nodes selected.
        </template>
        <template v-else>
          <div
            v-for="node in selection"
            :key="node.id"
          >
            {{ node.name }}
          </div>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectionType = ref('leaf')
    const selection = ref([])
    const items = [
      {
        id: 1,
        name: 'Root',
        children: [
          { id: 2, name: 'Child #1' },
          { id: 3, name: 'Child #2' },
          {
            id: 4,
            name: 'Child #3',
            children: [
              { id: 5, name: 'Grandchild #1' },
              { id: 6, name: 'Grandchild #2' },
            ],
          },
          {
            id: 5,
            name: 'Child #4',
            children: [
              { id: 7, name: 'Grandchild #1' },
              { id: 8, name: 'Grandchild #2' },
              { id: 9, name: 'Grandchild #3' },
            ],
          },
        ],
      },
    ]

    return { selectionType, selection, items }
  },
}
</script>
