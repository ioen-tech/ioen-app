<template>
  <v-menu
    v-model="isMenuVisible"
    bottom
    right
    transition="scale-transition"
    origin="top left"
  >
    <template #activator="{ on }">
      <v-chip v-on="on">
        VueJS
      </v-chip>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>VueJS</v-list-item-title>
          <v-list-item-subtitle>
            The Progressive JavaScript Framework
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            icon
            @click="isMenuVisible = false"
          >
            <v-icon>{{ icons.mdiClose }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiClose } from '@mdi/js'

export default {
  setup() {
    const isMenuVisible = ref(false)

    return {
      isMenuVisible,
      icons: { mdiClose },
    }
  },
}
</script>
