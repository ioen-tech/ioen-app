<template>
  <v-list
    nav
    dense
  >
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiFolderOutline,
  mdiAccountMultipleOutline,
  mdiStarOutline,
  mdiHistory,
  mdiCheckCircleOutline,
  mdiUploadOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(0)
    const items = [
      { text: 'My Files', icon: mdiFolderOutline },
      { text: 'Shared with me', icon: mdiAccountMultipleOutline },
      { text: 'Starred', icon: mdiStarOutline },
      { text: 'Recent', icon: mdiHistory },
      { text: 'Offline', icon: mdiCheckCircleOutline },
      { text: 'Uploads', icon: mdiUploadOutline },
      { text: 'Backups', icon: mdiCloudUploadOutline },
    ]

    return { selectedItem, items }
  },
}
</script>
