<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      @click="isTooltipVisiable = !isTooltipVisiable"
    >
      toggle tooltip
    </v-btn>

    <v-tooltip
      v-model="isTooltipVisiable"
      top
    >
      <template #activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
        >
          {{ icons.mdiInstagram }}
        </v-icon>
      </template>
      <span>Programmatic tooltip</span>
    </v-tooltip>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCart, mdiInstagram } from '@mdi/js'

export default {
  setup() {
    const isTooltipVisiable = ref(false)

    return {
      isTooltipVisiable,

      // Icons
      icons: { mdiCart, mdiInstagram },
    }
  },
}
</script>
