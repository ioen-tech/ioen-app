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
