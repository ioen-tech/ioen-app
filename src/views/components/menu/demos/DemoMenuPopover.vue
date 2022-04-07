<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    max-width="300"
    offset-x
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Menu as Popover
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="@/assets/images/avatars/1.png"
              alt="John"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              :class="fav ? 'error--text' : ''"
              icon
              @click="fav = !fav"
            >
              <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-card-text>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </v-card-text>

      <v-card-actions>
        <v-btn icon>
          <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ icons.mdiBookmarkOutline }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ icons.mdiShareVariant }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiHeartOutline, mdiBookmarkOutline, mdiShareVariant } from '@mdi/js'

export default {
  setup() {
    const fav = ref(true)
    const menu = ref(false)
    const message = ref(false)
    const hints = ref(true)

    return {
      fav,
      menu,
      message,
      hints,

      // Icons
      icons: {
        mdiHeartOutline,
        mdiBookmarkOutline,
        mdiShareVariant,
      },
    }
  },
}
</script>
