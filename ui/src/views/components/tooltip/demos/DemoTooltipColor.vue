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
