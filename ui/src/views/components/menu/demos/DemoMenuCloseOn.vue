<template>
  <div class="demo-space-x">
    <v-menu
      top
      :close-on-click="closeOnClick"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Keep open on click
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      top
      :close-on-content-click="closeOnContentClick"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Keep open on content click
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const closeOnClick = ref(false)
    const closeOnContentClick = ref(false)
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return {
      closeOnClick,
      closeOnContentClick,
      items,
    }
  },
}
</script>
