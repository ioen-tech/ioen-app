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

    <div class="text-center pa-4">
      <v-btn
        text
        @click="preTab"
      >
        Previous
      </v-btn>

      <v-divider
        class="mx-4"
        vertical
      ></v-divider>

      <v-btn
        text
        @click="nextTab"
      >
        Next
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(0)
    const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
    const tabItemText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `
    const totalLengthOfTab = items.length

    const preTab = () => {
      if (currentTab.value !== 0) {
        currentTab.value -= 1
      }
    }

    const nextTab = () => {
      if (currentTab.value !== totalLengthOfTab - 1) {
        currentTab.value += 1
      }
    }

    return {
      currentTab,
      items,
      tabItemText,
      preTab,
      nextTab,
    }
  },
}
</script>
