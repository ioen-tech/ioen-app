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
