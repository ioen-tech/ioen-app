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
