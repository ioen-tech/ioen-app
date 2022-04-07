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
