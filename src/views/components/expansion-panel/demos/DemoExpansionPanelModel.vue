<template>
  <div>
    <div class="mb-4">
      <v-btn
        color="primary"
        class="me-4"
        @click="all"
      >
        all
      </v-btn>

      <v-btn
        color="error"
        @click="none"
      >
        none
      </v-btn>

      <div class="mt-3">
        <span class="font-weight-bold">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <v-expansion-panels
      v-model="openedPanels"
      multiple
    >
      <v-expansion-panel
        v-for="item in items"
        :key="item"
      >
        <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const openedPanels = ref([])

    const items = ref(5)

    const all = () => {
      openedPanels.value = [...Array(items.value).keys()].map((_k, i) => i)
    }

    const none = () => {
      openedPanels.value = []
    }

    return {
      openedPanels,
      items,
      all,
      none,
    }
  },
}
</script>
