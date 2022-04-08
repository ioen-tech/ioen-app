/* eslint-disable no-useless-escape */

export const tooltipVModal = `
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
`

export const tooltipDelay = `
<template>
  <!-- delay on Open -->
  <v-tooltip
    open-delay="500"
    top
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        outlined
        color="primary"
        v-on="on"
      >
        <span>Open Delay On Hover</span>
      </v-btn>
    </template>
    <span>Open Delay On Hover</span>
  </v-tooltip>
</template>
`

export const tooltipVariousElements = `
<template>
  <div class="demo-space-x">
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Button
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-avatar
          v-bind="attrs"
          color="info"
          v-on="on"
        >
          <v-img src="@/assets/images/avatars/4.png"></v-img>
        </v-avatar>
      </template>
      <span>Tooltip on Avatar</span>
    </v-tooltip>

    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          large
          v-on="on"
        >
          {{ icons.mdiAccountOutline }}
        </v-icon>
      </template>
      <span>Tooltip on Icon</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mdiAccountOutline } from '@mdi/js'

export default {
  setup() {
    return { icons: { mdiAccountOutline } }
  },
}
</script>
`

export const tooltipAlignment = `
<template>
  <div class="demo-space-x">
    <!-- top -->
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Tooltip on Top
        </v-btn>
      </template>
      <span>Top tooltip</span>
    </v-tooltip>

    <!-- right -->
    <v-tooltip right>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Tooltip on  Right
        </v-btn>
      </template>
      <span>Right tooltip</span>
    </v-tooltip>

    <!-- left -->
    <v-tooltip left>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Tooltip on  Left
        </v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>

    <!-- bottom -->
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Tooltip on  Bottom
        </v-btn>
      </template>
      <span>Bottom tooltip</span>
    </v-tooltip>
  </div>
</template>
`

export const tooltipEvent = `
<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          outlined
          color="primary"
          v-on="on"
        >
          <span>Open On Hover</span>
        </v-btn>
      </template>
      <span>Open On Hover</span>
    </v-tooltip>

    <!-- open in click -->
    <v-tooltip
      :open-on-click="true"
      :open-on-hover="false"
      top
    >
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          outlined
          color="primary"
          @click="on.click"
        >
          <span>Open On click</span>
        </v-btn>
      </template>
      <span>Open On click</span>
    </v-tooltip>

    <!-- open on focus -->
    <v-tooltip
      :open-on-focus="true"
      top
    >
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          outlined
          color="primary"
          v-on="on"
        >
          <span>Open On Hover + Focus</span>
        </v-btn>
      </template>
      <span>Open On Hover + Focus</span>
    </v-tooltip>
  </div>
</template>
`

export const tooltipTransition = `
<template>
  <div class="demo-space-x">
    <!-- scale transition -->
    <v-tooltip
      top
      transition="scale-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          scale transition
        </v-btn>
      </template>
      <span>Scale Transition</span>
    </v-tooltip>

    <!-- scroll x transition -->
    <v-tooltip
      top
      transition="scroll-x-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          scroll X transition
        </v-btn>
      </template>
      <span>Scroll X Transition</span>
    </v-tooltip>

    <!-- scroll y transition -->
    <v-tooltip
      top
      transition="scroll-y-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          scroll y transition
        </v-btn>
      </template>
      <span>Scroll Y Transition</span>
    </v-tooltip>
  </div>
</template>
`

export const tooltipColor = `
<template>
  <div class="demo-space-x">
    <!-- default -->
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          default
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip
      v-for="tooltip in colorTooltipList"
      :key="tooltip"
      bottom
      :color="tooltip"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="tooltip"
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          {{ tooltip }}
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  setup() {
    const colorTooltipList = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

    return { colorTooltipList }
  },
}
</script>
`
