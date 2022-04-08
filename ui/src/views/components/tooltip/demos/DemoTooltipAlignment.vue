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
