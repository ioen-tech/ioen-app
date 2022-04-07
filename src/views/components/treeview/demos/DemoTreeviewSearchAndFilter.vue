<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search Company Directory"
      clearable
      :clear-icon="icons.mdiCloseCircleOutline"
    ></v-text-field>

    <v-treeview
      :items="items"
      :search="search"
      :open.sync="open"
    >
      <template #prepend="{ item }">
        <v-icon v-if="item.children">
          {{ item.id === 1 ? icons.mdiHomeVariantOutline : icons.mdiFolderNetworkOutline }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCloseCircleOutline, mdiFolderNetworkOutline, mdiHomeVariantOutline } from '@mdi/js'

export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Vuetify Human Resources',
        children: [
          {
            id: 2,
            name: 'Core team',
            children: [
              {
                id: 201,
                name: 'John',
              },
              {
                id: 202,
                name: 'Kael',
              },
              {
                id: 203,
                name: 'Nekosaur',
              },
              {
                id: 204,
                name: 'Jacek',
              },
              {
                id: 205,
                name: 'Andrew',
              },
            ],
          },
          {
            id: 3,
            name: 'Administrators',
            children: [
              {
                id: 301,
                name: 'Mike',
              },
              {
                id: 302,
                name: 'Hunt',
              },
            ],
          },
          {
            id: 4,
            name: 'Contributors',
            children: [
              {
                id: 401,
                name: 'Phlow',
              },
              {
                id: 402,
                name: 'Brandon',
              },
              {
                id: 403,
                name: 'Sean',
              },
            ],
          },
        ],
      },
    ]

    const open = ref([1, 2])
    const search = ref(null)
    const caseSensitive = ref(false)

    return {
      items,
      open,
      search,
      caseSensitive,

      // icons
      icons: { mdiCloseCircleOutline, mdiFolderNetworkOutline, mdiHomeVariantOutline },
    }
  },
}
</script>
