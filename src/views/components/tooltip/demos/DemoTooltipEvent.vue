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
