<template>
  <v-list>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      :prepend-icon="item.action"
      no-action
    >
      <template #activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.items"
        :key="child.title"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import {
  mdiTicketConfirmationOutline,
  mdiSilverwareForkKnife,
  mdiSchoolOutline,
  mdiRun,
  mdiBottleTonicPlusOutline,
  mdiContentCut,
  mdiTagOutline,
} from '@mdi/js'

export default {
  setup() {
    const items = [
      {
        action: mdiTicketConfirmationOutline,
        items: [{ title: 'List Item' }],
        title: 'Attractions',
      },
      {
        action: mdiSilverwareForkKnife,
        items: [{ title: 'Breakfast & brunch' }, { title: 'New American' }, { title: 'Sushi' }],
        title: 'Dining',
      },
      {
        action: mdiSchoolOutline,
        items: [{ title: 'List Item' }],
        title: 'Education',
      },
      {
        action: mdiRun,
        items: [{ title: 'List Item' }],
        title: 'Family',
      },
      {
        action: mdiBottleTonicPlusOutline,
        items: [{ title: 'List Item' }],
        title: 'Health',
      },
      {
        action: mdiContentCut,
        items: [{ title: 'List Item' }],
        title: 'Office',
      },
      {
        action: mdiTagOutline,
        items: [{ title: 'List Item' }],
        title: 'Promotions',
      },
    ]

    return { items }
  },
}
</script>
