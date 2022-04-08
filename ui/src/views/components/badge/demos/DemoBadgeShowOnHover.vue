<template>
  <div class="demo-space-x">
    <v-badge
      :value="showTwitterBadgeOnHover"
      content="3"
      right
      transition="slide-x-transition"
    >
      <v-hover v-model="showTwitterBadgeOnHover">
        <v-icon>
          {{ icons.mdiTwitter }}
        </v-icon>
      </v-hover>
    </v-badge>

    <v-badge
      :value="showInstagramBadgeOnHover"
      content="5"
      right
      transition="scale-transition"
    >
      <v-hover v-model="showInstagramBadgeOnHover">
        <v-icon>
          {{ icons.mdiInstagram }}
        </v-icon>
      </v-hover>
    </v-badge>

    <v-badge
      :value="showWhatsappBadgeOnHover"
      content="1"
      right
      transition="slide-x-transition"
    >
      <v-hover v-model="showWhatsappBadgeOnHover">
        <v-icon>
          {{ icons.mdiWhatsapp }}
        </v-icon>
      </v-hover>
    </v-badge>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiInstagram, mdiTwitter, mdiWhatsapp } from '@mdi/js'

export default {
  setup() {
    const showInstagramBadgeOnHover = ref(false)
    const showTwitterBadgeOnHover = ref(false)
    const showWhatsappBadgeOnHover = ref(false)

    return {
      showInstagramBadgeOnHover,
      showTwitterBadgeOnHover,
      showWhatsappBadgeOnHover,

      // icons
      icons: { mdiInstagram, mdiTwitter, mdiWhatsapp },
    }
  },
}
</script>
