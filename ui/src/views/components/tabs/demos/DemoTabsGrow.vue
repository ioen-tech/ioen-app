<template>
  <div>
    <v-tabs
      v-model="currentTab"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text>{{ tabItemText }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(null)
    const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
    const tabItemText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `

    return { currentTab, items, tabItemText }
  },
}
</script>
