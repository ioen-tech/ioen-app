<template>
  <div>
    <v-tabs v-model="currentTab">
      <v-tab>Tab One</v-tab>
      <v-tab>Tab Two</v-tab>
      <v-tab>Tab Three</v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="item in 3"
        :key="item"
      >
        <v-card flat>
          <v-card-text
            class="pb-0"
            v-text="tabItemContent"
          >
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(0)
    const tabItemContent = `Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
    `

    return { currentTab, tabItemContent }
  },
}
</script>
