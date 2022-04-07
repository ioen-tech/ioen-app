<template>
  <div>
    <v-tabs v-model="currentTab">
      <v-tab
        v-for="n in totalTabs"
        :key="n"
      >
        Tab {{ n }}
      </v-tab>
    </v-tabs>

    <!-- buttons -->
    <div class="text-center mt-11">
      <v-btn
        :disabled="!totalTabs"
        text
        @click="totalTabs--"
      >
        Remove Tab
      </v-btn>

      <v-divider
        class="mx-4"
        vertical
      ></v-divider>

      <v-btn
        text
        @click="totalTabs++"
      >
        Add Tab
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const totalTabs = ref(3)
    const currentTab = ref(0)

    watch(totalTabs, newValue => {
      currentTab.value = newValue - 1
    })

    return { totalTabs, currentTab }
  },
}
</script>
